<template>
  <div id="app">
    <left-nav :collapse='collapse'/>
    <right-main/>
    <div class="slider" :class="{slideIn:collapse}"></div>
    <div class="modal" :class="{hide:!collapse}"></div>
  </div>
</template>
<script>
import {mapGetters} from 'vuex';
import LeftNav from '@/components/home/LeftNav.vue';
import RightMain from '@/components/home/RightMain.vue';
export default {
  name: 'App',
  components:{
    LeftNav,
    RightMain,
  },
  computed:{
    ...mapGetters(['collapse'])
  }
}
</script>
<style lang='less'>
html,
body {
  .size(100%, 100%);
  overflow: hidden;
}
#app {
  display: flex;
  position: relative;
  .size(100%, 100%);
  .modal {
    .effect-modal();
    transition: 0.5s linear;
  }
  .slider {
    position: absolute;
    width: 200px;
    height: 100%;
    background: pink;
    right: -300px;
    top: 0;
    z-index: 1003;
    transition: 0.3s linear;
  }
  .slideIn {
    right: 0px;
    transition: 0.3s linear;
  }
  .hide {
    opacity: 0;
    transition: .3s linear;
  }
}
</style>
