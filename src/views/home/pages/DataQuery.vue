<template>
    <HomeNav />
    <div id="data_query">
        <br />
        <div class="title">资源专项调查</div>
        <div class="echarts echarts2"></div>
        <div class="title">基础信息管理</div>
        <div class="echarts echarts1"></div>
        <div class="title">草原资源评价</div>
        <div class="echarts echarts3"></div>
        <div class="title">确权承包管理</div>
        <div class="echarts echarts4"></div>
        <div class="title">基本草原划定专题</div>
        <div class="echarts echarts5"></div>
    </div>
</template>

<script>
import HomeNav from '../components/HomeNav.vue';
import { onMounted } from 'vue';
import * as echarts from 'echarts';
export default {
  components: { HomeNav },
  name: 'data_page',
  setup() {
    onMounted(() => {
      //需要获取到element,所以是onMounted的Hook
      let myChart = echarts.init(document.querySelector('.echarts1'));
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'Rainfall vs Evaporation',
          subtext: 'Fake Data',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Rainfall', 'Evaporation'],
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            // prettier-ignore
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: 'Rainfall',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            markPoint: {
              data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' },
              ],
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
          },
          {
            name: 'Evaporation',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            markPoint: {
              data: [
                {
                  name: 'Max',
                  value: 182.2,
                  xAxis: 7,
                  yAxis: 183,
                },
                {
                  name: 'Min',
                  value: 2.3,
                  xAxis: 11,
                  yAxis: 3,
                },
              ],
            },
            markLine: {
              data: [{ type: 'average', name: 'Avg' }],
            },
          },
        ],
      });
      window.onresize = function () {
        myChart.resize();
      };

      let myChart3 = echarts.init(document.querySelector('.echarts3'));
      let base = +new Date(1988, 9, 3);
      let oneDay = 24 * 3600 * 1000;
      let data = [[base, Math.random() * 300]];
      for (let i = 1; i < 20000; i++) {
        let now = new Date((base += oneDay));
        data.push([+now, Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])]);
      }
      myChart3.setOption({
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%'];
          },
        },
        title: {
          left: 'center',
          text: 'Large Ara Chart',
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none',
            },
            restore: {},
            saveAsImage: {},
          },
        },
        xAxis: {
          type: 'time',
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
        },
        dataZoom: [
          {
            type: 'inside',
            start: 0,
            end: 20,
          },
          {
            start: 0,
            end: 20,
          },
        ],
        series: [
          {
            name: 'Fake Data',
            type: 'line',
            smooth: true,
            symbol: 'none',
            areaStyle: {},
            data: data,
          },
        ],
      });
      window.onresize = function () {
        myChart3.resize();
      };

      let myChart4 = echarts.init(document.querySelector('.echarts4'));
      myChart4.setOption({
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      });
      window.onresize = function () {
        myChart4.resize();
      };

      let myChart5 = echarts.init(document.querySelector('.echarts5'));
      myChart5.setOption({
        title: {
          text: 'Stacked Area Chart',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985',
            },
          },
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            label: {
              show: true,
              position: 'top',
            },
            areaStyle: {},
            emphasis: {
              focus: 'series',
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      });
      window.onresize = function () {
        myChart5.resize();
      };

      let myChart2 = echarts.init(document.querySelector('.echarts2'));
      myChart2.setOption({
        title: {
          text: 'Stacked Line',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      });
      window.onresize = function () {
        myChart2.resize();
      };
    });
  },
};
</script>

<style scoped>
#data_query {
  width: 800px;
  margin: auto;
}

.echarts {
  width: 100%;
  height: 600px;
  margin: 30px 0;
}

.title {
  line-height: 100px;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
}
</style>
