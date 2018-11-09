<template>
    <div class="leftBox">
        <header>
            <p>yfrz</p>
            <p>记录新发现</p>
        <span class="collapse" @click="toggleCollapse" :class="{coll:collapse}">
            <div></div>
            <div></div>
            <div></div>
        </span>
        </header>
        <ul class="nav">
            <nav-list :list='list'></nav-list>
        </ul>
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';
import NavList from './NavList.vue';
import list from '../../../../mocks/aside';
export default {
    data(){
        return {
            navConfig:[{parent:{label:'编程',value:'code'},children:[{parent:{label:'',value:''},children:[{}]},]}],
            list:list.result
        }
    },
    methods:{
        ...mapActions(['toggleCollapse'])
    },
    computed:{
        ...mapGetters(['collapse'])
    },
    mounted:{

    },
    components:{
      NavList
    }
}
</script>
<style lang="less" scoped>
.leftBox {
  .size(300px, 100%);
  border-right: 1px solid grey;
  background: pink;
  header {
    .size(100%, 150px);
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    p {
      line-height: 30px;
      height: 30px;
    }
    p:nth-child(1) {
      font-size: 25px;
    }
    p:nth-child(2) {
      font-size: 15px;
      text-align: right;
    }
  }
  ul {
    padding-left: 20px;
    li {
      font-size: 20px;
    }
  }
}
@media screen and (max-width: 800px) {
  .leftBox {
    width: 100%;
    height: 100px;
    border: none;
    header {
      p:nth-child(2) {
        text-align: left;
      }
    }
    ul {
      display: none;
    }
    .collapse {
      display: inline-block;
      width: 20px;
      height: 20px;
      padding: 5px;
      position: absolute;
      right: 15px;
      bottom: 100px;
      z-index: 9999;
      div {
        width: 20px;
        height: 6px;
        border-top: 1px solid black;
        transition: 0.2s linear;
      }
    }
    .coll {
      div:nth-child(1) {
        transform: rotate(-45deg);
        transform-origin: 22px;
        transition: 0.2s linear;
        width: 20px;
      }
      div:nth-child(2) {
        transform: rotate(-45deg);
        transform-origin: 15px 15px;
        border: transparent;
        transition: 0.2s linear;
      }
      div:nth-child(3) {
        transform: rotate(45deg);
        transform-origin: 15px 1px;
        transition: 0.2s linear;
        width: 20px;
      }
    }
  }
}
</style>
