import { BasicColumn, FormSchema } from '/@/components/Table';

export const columns: BasicColumn[] = [
  {
    title: '租户名称',
    dataIndex: 'name',
    width: 200,
    align: 'left',
  },
  {
    title: '租户编号',
    dataIndex: 'id',
    width: 180,
  },
  {
    title: '开始时间',
    dataIndex: 'beginDate',
    sorter: true,
    width: 180,
  },
  {
    title: '结束时间',
    dataIndex: 'endDate',
    sorter: true,
    width: 180,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    sorter: true,
    width: 180,
  },
  {
    title: '状态',
    dataIndex: 'status_dictText',
    width: 100,
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'name',
    label: '租户名称',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '正常', value: 1 },
        { label: '冻结', value: 0 },
      ],
    },
    colProps: { span: 8 },
  },
  {
    field: 'fieldTime',
    component: 'RangePicker',
    label: '时间字段',
    colProps: {
      span: 8,
    },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'name',
    label: '租户名称',
    component: 'Input',
    required: true,
  },
  {
    field: 'id',
    label: '租户编号',
    component: 'InputNumber',
    required: true,
  },
  {
    field: 'beginDate',
    label: '开始时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
  },
  {
    field: 'endDate',
    label: '结束时间',
    component: 'DatePicker',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '正常', value: 1 },
        { label: '冻结', value: 0 },
      ],
    },
  },
];
