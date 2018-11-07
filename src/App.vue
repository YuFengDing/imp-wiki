<template>
  <div id="app">
    <left-nav/>
    <main-content/>
  </div>
</template>
<script>
import LeftNav from '@/components/home/LeftNav.vue';
import MainContent from '@/components/home/MainContent.vue';
export default {
  name: 'App',
  components:{
    LeftNav,
    MainContent,
  }
}
</script>
<style lang='less'>
html,body {
  .size(100%,100%);
  overflow: hidden;
}
#app {
  display: flex;
  .size(100%,100%)
}
</style>
