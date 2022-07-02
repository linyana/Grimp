import { watch } from 'vue';
import XEUtils from 'xe-utils';
import { simpleDebounce } from '/@/utils/common/compUtils';
import { JVxeDataProps, JVxeRefs, JVxeTableProps, JVxeTypes } from '../types';
import { getEnhanced } from '../utils/enhancedUtils';
import { VxeTableInstance, VxeTablePrivateMethods } from 'vxe-table';
import { cloneDeep } from 'lodash-es';
import { isArray, isEmpty, isNull, isString } from '/@/utils/is';
import { useLinkage } from './useLinkage';
import { useWebSocket } from './useWebSocket';
import { getPrefix, getJVxeAuths } from '../utils/authUtils';

export function useMethods(props: JVxeTableProps, { emit }, data: JVxeDataProps, refs: JVxeRefs, instance) {
  let xTableTemp: VxeTableInstance & VxeTablePrivateMethods;

  function getXTable() {
    if (!xTableTemp) {
      // !. 为 typescript 的非空断言
      xTableTemp = refs.gridRef.value!.getRefMaps().refTable.value;
    }
    return xTableTemp;
  }

  // noinspection JSUnusedGlobalSymbols
  const hookMethods = {
    getXTable,
    addRows,
    pushRows,
    insertRows,
    addOrInsert,
    setValues,
    getValues,
    getTableData,
    getNewData,
    getNewDataWithId,
    getIfRowById,
    getNewRowById,
    getDeleteData,
    getSelectionData,
    removeRows,
    removeRowsById,
    removeSelection,
    resetScrollTop,
    validateTable,
    fullValidateTable,
    clearSelection,
    filterNewRows,
    isDisabledRow,
    recalcDisableRows,
    rowResort,
  };

  // 多级联动
  const linkageMethods = useLinkage(props, data, hookMethods);
  // WebSocket 无痕刷新
  const socketMethods = useWebSocket(props, data, hookMethods);

  // 可显式供外部调用的方法
  const publicMethods = {
    ...hookMethods,
    ...linkageMethods,
    ...socketMethods,
  };

  /** 监听vxe滚动条位置 */
  function handleVxeScroll(event) {
    let { scroll } = data;

    // 记录滚动条的位置
    scroll.top = event.scrollTop;
    scroll.left = event.scrollLeft;

    refs.subPopoverRef.value?.close();
    data.scrolling.value = true;
    closeScrolling();
  }

  // 当手动勾选单选时触发的事件
  function handleVxeRadioChange(event) {
    let row = event.$table.getRadioRecord();
    data.selectedRows.value = row ? [row] : [];
    handleSelectChange('radio', data.selectedRows.value, event);
  }

  // 当手动勾选全选时触发的事件
  function handleVxeCheckboxAll(event) {
    data.selectedRows.value = event.$table.getCheckboxRecords();
    handleSelectChange('checkbox-all', data.selectedRows.value, event);
  }

  // 当手动勾选并且值发生改变时触发的事件
  function handleVxeCheckboxChange(event) {
    data.selectedRows.value = event.$table.getCheckboxRecords();
    handleSelectChange('checkbox', data.selectedRows.value, event);
  }

  // 行选择change事件
  function handleSelectChange(type, selectedRows, $event) {
    let action;
    if (type === 'radio') {
      action = 'selected';
    } else if (type === 'checkbox') {
      action = selectedRows.includes($event.row) ? 'selected' : 'unselected';
    } else {
      action = 'selected-all';
    }

    data.selectedRowIds.value = selectedRows.map((row) => row.id);
    trigger('selectRowChange', {
      type: type,
      action: action,
      $event: $event,
      row: $event.row,
      selectedRows: data.selectedRows.value,
      selectedRowIds: data.selectedRowIds.value,
    });
  }

  // 点击单元格时触发的事件
  function handleCellClick(event) {
    let { row, column, $event, $table } = event;

    // 点击了可编辑的
    if (column.editRender) {
      refs.subPopoverRef.value?.close();
      return;
    }

    // 显示详细信息
    if (column.params?.showDetails) {
      refs.detailsModalRef.value?.open(event);
    } else if (refs.subPopoverRef.value) {
      refs.subPopoverRef.value.toggle(event);
    } else if (props.clickSelectRow) {
      let className = $event.target.className || '';
      className = isString(className) ? className : className.toString();
      // 点击的是expand，不做处理
      if (className.includes('vxe-table--expand-btn')) {
        return;
      }
      // 点击的是checkbox，不做处理
      if (className.includes('vxe-checkbox--icon') || className.includes('vxe-cell--checkbox')) {
        return;
      }
      // 点击的是radio，不做处理
      if (className.includes('vxe-radio--icon') || className.includes('vxe-cell--radio')) {
        return;
      }
      if (props.rowSelectionType === 'radio') {
        $table.setRadioRow(row);
        handleVxeRadioChange(event);
      } else {
        $table.toggleCheckboxRow(row);
        handleVxeCheckboxChange(event);
      }
    }
  }

  // 单元格被激活编辑时会触发该事件
  function handleEditActived({ column }) {
    // 执行增强
    getEnhanced(column.params.type).aopEvents.editActived!.apply(instance, arguments as any);
  }

  // 单元格编辑状态下被关闭时会触发该事件
  function handleEditClosed({ column }) {
    // 执行增强
    getEnhanced(column.params.type).aopEvents.editClosed!.apply(instance, arguments as any);
  }

  // 返回值决定行是否可选中
  function handleCheckMethod({ row }) {
    if (props.disabled) {
      return false;
    }
    return !data.disabledRowIds.includes(row.id);
  }

  // 返回值决定单元格是否可以编辑
  function handleActiveMethod({ row, column }) {
    let flag = (() => {
      if (props.disabled) {
        return false;
      }
      if (data.disabledRowIds.includes(row.id)) {
        return false;
      }
      if (column.params?.disabled) {
        return false;
      }
      // 执行增强
      return getEnhanced(column.params.type).aopEvents.activeMethod!.apply(instance, arguments as any) ?? true;
    })();
    if (!flag) {
      getXTable().clearActived();
    }
    return flag;
  }

  /**
   * 判断是否是禁用行
   * @param row 行数据
   * @param force 是否强制判断
   */
  function isDisabledRow(row, force = true) {
    if (!force) {
      return !data.disabledRowIds.includes(row.id);
    }
    if (props.disabledRows == null || isEmpty(props.disabledRows)) {
      return false;
    }
    let disabled: boolean = false;
    let keys: string[] = Object.keys(props.disabledRows);
    for (const key of keys) {
      // 判断是否有该属性
      if (row.hasOwnProperty(key)) {
        let temp: any = props.disabledRows![key];
        // 禁用规则可以是一个数组
        if (isArray(temp)) {
          disabled = temp.includes(row[key]);
        } else {
          disabled = temp === row[key];
        }
        if (disabled) {
          break;
        }
      }
    }
    return disabled;
  }

  // 重新计算禁用行
  function recalcDisableRows() {
    let xTable = getXTable();
    data.disabledRowIds = [];
    const { tableFullData } = xTable.internalData;
    tableFullData.forEach((row) => {
      // 判断是否是禁用行
      if (isDisabledRow(row)) {
        data.disabledRowIds.push(row.id);
      }
    });
    xTable.updateData();
  }

  // 监听 disabledRows，更改时重新计算禁用行
  watch(
    () => props.disabledRows,
    () => recalcDisableRows()
  );

  // 返回值决定是否允许展开、收起行
  function handleExpandToggleMethod({ expanded }) {
    return !(expanded && props.disabled);
  }

  // 设置 data.scrolling 防抖模式
  const closeScrolling = simpleDebounce(function () {
    data.scrolling.value = false;
  }, 100);

  /** 表尾数据处理方法，用于显示统计信息 */
  function handleFooterMethod({ columns, data: $data }) {
    const { statistics } = data;
    let footers: any[] = [];
    if (statistics.has) {
      if (statistics.sum.length > 0) {
        footers.push(
          getFooterStatisticsMap({
            columns: columns,
            title: '合计',
            checks: statistics.sum,
            method: (column) => XEUtils.sum($data, column.property),
          })
        );
      }
      if (statistics.average.length > 0) {
        footers.push(
          getFooterStatisticsMap({
            columns: columns,
            title: '平均',
            checks: statistics.average,
            method: (column) => XEUtils.mean($data, column.property),
          })
        );
      }
    }
    return footers;
  }

  /** 获取底部统计Map */
  function getFooterStatisticsMap({ columns, title, checks, method }) {
    return columns.map((column, columnIndex) => {
      if (columnIndex === 0) {
        return title;
      }
      if (checks.includes(column.property)) {
        return method(column, columnIndex);
      }
      return null;
    });
  }

  // 创建新行，自动添加默认值
  function createRow(record: Recordable = {}) {
    let xTable = getXTable();
    // 添加默认值
    xTable.internalData.tableFullColumn.forEach((column) => {
      let col = column.params;
      if (col) {
        if (col.key && (record[col.key] == null || record[col.key] === '')) {
          // 设置默认值
          let createValue = getEnhanced(col.type).createValue;
          let defaultValue = col.defaultValue ?? '';
          let ctx = { context: { row: record, column, $table: xTable } };
          record[col.key] = createValue(defaultValue, ctx);
        }
        // 处理联动列
        if (col.type === JVxeTypes.select && data.innerLinkageConfig.size > 0) {
          // 判断当前列是否是联动列
          if (data.innerLinkageConfig.has(col.key)) {
            let configItem = data.innerLinkageConfig.get(col.key);
            linkageMethods.getLinkageOptionsAsync(configItem, '');
          }
        }
      }
    });
    return record;
  }

  async function addOrInsert(rows: Recordable | Recordable[] = {}, index, triggerName, options?: IAddRowsOptions) {
    let xTable = getXTable();
    let records;
    if (isArray(rows)) {
      records = rows;
    } else {
      records = [rows];
    }
    // 遍历添加默认值
    records.forEach((record) => createRow(record));
    let setActive = options?.setActive ?? props.addSetActive ?? true;
    let result = await pushRows(records, { index: index, setActive });
    // 遍历插入的行
    // online js增强时以传过来值为准，不再赋默认值
    if (!(options?.isOnlineJS ?? false)) {
      if (triggerName != null) {
        for (let i = 0; i < result.rows.length; i++) {
          let row = result.rows[i];
          trigger(triggerName, {
            row: row,
            rows: result.rows,
            insertIndex: index,
            $table: xTable,
            target: instance,
          });
        }
      }
    }
    return result;
  }

  // 新增、插入一行时的可选参数
  interface IAddRowsOptions {
    // 是否是 onlineJS增强 触发的
    isOnlineJS?: boolean;
    // 是否激活编辑状态
    setActive?: boolean;
  }

  /**
   * 添加一行或多行
   *
   * @param rows
   * @param options 参数
   * @return
   */
  async function addRows(rows: Recordable | Recordable[] = {}, options?: IAddRowsOptions) {
    return addOrInsert(rows, -1, 'added', options);
  }

  /**
   * 添加一行或多行临时数据，不会填充默认值，传什么就添加进去什么
   * @param rows
   * @param options 选项
   * @param options.setActive 是否激活最后一行的编辑模式
   */
  async function pushRows(rows: Recordable | Recordable[] = {}, options = { setActive: false, index: -1 }) {
    let xTable = getXTable();
    let { setActive, index } = options;
    index = index === -1 ? index : xTable.internalData.tableFullData[index];
    // 插入行
    let result = await xTable.insertAt(rows, index);
    if (setActive) {
      // 激活最后一行的编辑模式
      xTable.setActiveRow(result.rows[result.rows.length - 1]);
    }
    await recalcSortNumber();
    return result;
  }

  /**
   * 插入一行或多行临时数据
   *
   * @param rows
   * @param index 添加下标，数字，必填
   * @param options 参数
   * @return
   */
  function insertRows(rows: Recordable | Recordable[] = {}, index: number, options?: IAddRowsOptions) {
    if (index < 0) {
      console.warn(`【JVxeTable】insertRows：index必须传递数字，且大于-1`);
      return;
    }
    return addOrInsert(rows, index, 'inserted', options);
  }

  /** 获取表格表单里的值 */
  function getValues(callback, rowIds) {
    let tableData = getTableData({ rowIds: rowIds });
    callback('', tableData);
  }

  /** 获取表格数据 */
  function getTableData(options: any = {}) {
    let { rowIds } = options;
    let tableData;
    // 仅查询指定id的行
    if (isArray(rowIds) && rowIds.length > 0) {
      tableData = [];
      rowIds.forEach((rowId) => {
        let { row } = getIfRowById(rowId);
        if (row) {
          tableData.push(row);
        }
      });
    } else {
      // 查询所有行
      tableData = getXTable().getTableData().fullData;
    }
    return filterNewRows(tableData, false);
  }

  /** 仅获取新增的数据 */
  function getNewData() {
    let newData = getNewDataWithId();
    newData.forEach((row) => delete row.id);
    return newData;
  }

  /** 仅获取新增的数据,带有id */
  function getNewDataWithId() {
    let xTable = getXTable();
    return cloneDeep(xTable.getInsertRecords());
  }

  /** 根据ID获取行，新增的行也能查出来 */
  function getIfRowById(id) {
    let xTable = getXTable();
    let row = xTable.getRowById(id),
      isNew = false;
    if (!row) {
      row = getNewRowById(id);
      if (!row) {
        console.warn(`JVxeTable.getIfRowById：没有找到id为"${id}"的行`);
        return { row: null };
      }
      isNew = true;
    }
    return { row, isNew };
  }

  /** 通过临时ID获取新增的行 */
  function getNewRowById(id) {
    let records = getXTable().getInsertRecords();
    for (let record of records) {
      if (record.id === id) {
        return record;
      }
    }
    return null;
  }

  /**
   * 过滤添加的行
   * @param rows 要筛选的行数据
   * @param remove true = 删除新增，false=只删除id
   * @param handler function
   */
  function filterNewRows(rows, remove = true, handler?: Fn) {
    let insertRecords = getXTable().getInsertRecords();
    let records: Recordable[] = [];
    for (let row of rows) {
      let item = cloneDeep(row);
      if (insertRecords.includes(row)) {
        handler ? handler({ item, row, insertRecords }) : null;
        if (remove) {
          continue;
        }
        delete item.id;
      }
      records.push(item);
    }
    return records;
  }

  /**
   * 重置滚动条Top位置
   * @param top 新top位置，留空则滚动到上次记录的位置，用于解决切换tab选项卡时导致白屏以及自动将滚动条滚动到顶部的问题
   */
  function resetScrollTop(top?) {
    let xTable = getXTable();
    xTable.scrollTo(null, top == null || top === '' ? data.scroll.top : top);
  }

  /** 校验table，失败返回errMap，成功返回null */
  async function validateTable(rows?) {
    let xTable = getXTable();
    const errMap = await xTable.validate(rows ?? true).catch((errMap) => errMap);
    return errMap ? errMap : null;
  }

  /** 完整校验 */
  async function fullValidateTable(rows?) {
    let xTable = getXTable();
    const errMap = await xTable.fullValidate(rows ?? true).catch((errMap) => errMap);
    return errMap ? errMap : null;
  }

  type setValuesParam = { rowKey: string; values: Recordable };

  /**
   * 设置某行某列的值
   *
   * @param values
   * @return 返回受影响的单元格数量
   */
  function setValues(values: setValuesParam[]): number {
    if (!isArray(values)) {
      console.warn(`[JVxeTable] setValues 必须传递数组`);
      return 0;
    }
    let xTable = getXTable();
    let count = 0;
    values.forEach((item) => {
      let { rowKey, values: record } = item;
      let { row } = getIfRowById(rowKey);
      if (!row) {
        return;
      }
      Object.keys(record).forEach((colKey) => {
        let column = xTable.getColumnByField(colKey);
        if (column) {
          let oldValue = row[colKey];
          let newValue = record[colKey];
          if (newValue !== oldValue) {
            row[colKey] = newValue;
            // 触发 valueChange 事件
            trigger('valueChange', {
              type: column.params.type,
              value: newValue,
              oldValue: oldValue,
              col: column.params,
              column: column,
              isSetValues: true,
            });
            count++;
          }
        } else {
          console.warn(`[JVxeTable] setValues 没有找到key为"${colKey}"的列`);
        }
      });
    });
    if (count > 0) {
      xTable.updateData();
    }
    return count;
  }

  /** 清空选择行 */
  async function clearSelection() {
    const xTable = getXTable();
    let event = { $table: xTable, target: instance };
    if (props.rowSelectionType === JVxeTypes.rowRadio) {
      await xTable.clearRadioRow();
      handleVxeRadioChange(event);
    } else {
      await xTable.clearCheckboxRow();
      handleVxeCheckboxChange(event);
    }
  }

  /**
   * 获取选中数据
   * @param isFull 如果 isFull=true 则获取全表已选中的数据
   */
  function getSelectionData(isFull?: boolean) {
    const xTable = getXTable();
    if (props.rowSelectionType === JVxeTypes.rowRadio) {
      let row = xTable.getRadioRecord(isFull);
      if (isNull(row)) {
        return [];
      }
      return filterNewRows([row], false);
    } else {
      return filterNewRows(xTable.getCheckboxRecords(isFull), false);
    }
  }

  /** 仅获取被删除的数据（新增又被删除的数据不会被获取到） */
  function getDeleteData() {
    return filterNewRows(getXTable().getRemoveRecords(), false);
  }

  /** 删除一行或多行数据 */
  async function removeRows(rows) {
    const xTable = getXTable();
    const res = await xTable.remove(rows);
    let removeEvent: any = { deleteRows: rows, $table: xTable };
    trigger('removed', removeEvent);
    await recalcSortNumber();
    return res;
  }

  /** 根据id删除一行或多行 */
  function removeRowsById(rowId) {
    let rowIds;
    if (isArray(rowId)) {
      rowIds = rowId;
    } else {
      rowIds = [rowId];
    }
    let rows = rowIds
      .map((id) => {
        let { row } = getIfRowById(id);
        if (!row) {
          return;
        }
        if (row) {
          return row;
        } else {
          console.warn(`【JVxeTable】removeRowsById：${id}不存在`);
          return null;
        }
      })
      .filter((row) => row != null);
    return removeRows(rows);
  }

  // 删除选中的数据
  async function removeSelection() {
    let xTable = getXTable();
    let res;
    if (props.rowSelectionType === JVxeTypes.rowRadio) {
      res = await xTable.removeRadioRow();
    } else {
      res = await xTable.removeCheckboxRow();
    }
    await clearSelection();
    await recalcSortNumber();
    return res;
  }

  /** 重新计算排序字段的数值 */
  async function recalcSortNumber(force = false) {
    if (props.dragSort || force) {
      let xTable = getXTable();
      let sortKey = props.sortKey ?? 'orderNum';
      let sortBegin = props.sortBegin ?? 0;
      xTable.internalData.tableFullData.forEach((data) => (data[sortKey] = sortBegin++));
      // 4.1.0
      await xTable.updateCache();
      // 4.1.1
      // await xTable.cacheRowMap()
      return await xTable.updateData();
    }
  }

  /**
   * 排序表格
   * @param oldIndex
   * @param newIndex
   * @param force 强制排序
   */
  async function doSort(oldIndex: number, newIndex: number, force = false) {
    if (props.dragSort || force) {
      let xTable = getXTable();
      let sort = (array) => {
        // 存储old数据，并删除该项
        let row = array.splice(oldIndex, 1)[0];
        // 向newIndex处添加old数据
        array.splice(newIndex, 0, row);
      };
      sort(xTable.internalData.tableFullData);
      if (xTable.keepSource) {
        sort(xTable.internalData.tableSourceData);
      }
      return await recalcSortNumber(force);
    }
  }

  /** 行重新排序 */
  function rowResort(oldIndex: number, newIndex: number) {
    return doSort(oldIndex, newIndex, true);
  }

  // ---------------- begin 权限控制 ----------------
  // 加载权限
  function loadAuthsMap() {
    if (!props.authPre || props.authPre.length == 0) {
      data.authsMap.value = null;
    } else {
      data.authsMap.value = getJVxeAuths(props.authPre);
    }
  }

  /**
   * 根据 权限code 获取权限
   * @param authCode
   */
  function getAuth(authCode) {
    if (data.authsMap.value != null && props.authPre) {
      let prefix = getPrefix(props.authPre);
      return data.authsMap.value.get(prefix + authCode);
    }
    return null;
  }

  // 获取列权限
  function getColAuth(key: string) {
    return getAuth(key);
  }

  // 判断按钮权限
  function hasBtnAuth(key: string) {
    return getAuth('btn:' + key)?.isAuth ?? true;
  }

  // ---------------- end 权限控制 ----------------

  /* --- 辅助方法 ---*/

  function created() {
    loadAuthsMap();
  }

  // 触发事件
  function trigger(name, event: any = {}) {
    event.$target = instance;
    event.$table = getXTable();
    //online增强参数兼容
    event.target = instance;
    emit(name, event);
  }

  return {
    methods: {
      trigger,
      ...publicMethods,
      closeScrolling,
      doSort,
      recalcSortNumber,
      handleVxeScroll,
      handleVxeRadioChange,
      handleVxeCheckboxAll,
      handleVxeCheckboxChange,
      handleFooterMethod,
      handleCellClick,
      handleEditActived,
      handleEditClosed,
      handleCheckMethod,
      handleActiveMethod,
      handleExpandToggleMethod,
      getColAuth,
      hasBtnAuth,
    },
    publicMethods,
    created,
  };
}
