<template>
  <div id="app">
    <left-nav/>
    <right-main/>
  </div>
</template>
<script>
import LeftNav from '@/components/home/LeftNav.vue';
import RightMain from '@/components/home/RightMain.vue';
export default {
  name: 'App',
  components:{
    LeftNav,
    RightMain,
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
