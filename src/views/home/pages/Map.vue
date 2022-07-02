<template>
  <div id="map">
    <Nav />
    <Search />
    <Pannel />
    <Show />
  </div>
</template>

<script>
  import Search from '../components/Search.vue';
  import Pannel from '../components/Pannel.vue';
  import Show from '../components/Show.vue';
  import Nav from '../components/Nav.vue';

  export default {
    components: { Search, Pannel, Show, Nav },
  };
</script>

<style scoped>
  body,
  html {
    height: 100%;
  }

  #map {
    height: calc(100% + 60px);
    width: 100%;
    background-image: url(/resource/images/map.png);
    background-size: 100% 100%;
  }
</style>
