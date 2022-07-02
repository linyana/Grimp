<template>
  <div id="viewDiv"></div>
</template>

<script lang="ts" setup>
  import { onMounted, onUnmounted } from 'vue';
  import { getMap } from '/@/utils/map/index';

  const res = getMap({});

  const map = res.map;
  const view = res.view;

  onMounted(() => {
    console.log(view);
    view.container = document.getElementById('viewDiv') as HTMLInputElement;
  });

  // onUnmounted(() => {
  //   if (map) {
  //     map.destroy();
  //   }
  //   console.log('map销毁完成', map);
  // });
</script>
<style scoped lang="less">
  #viewDiv {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>
