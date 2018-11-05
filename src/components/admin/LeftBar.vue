<template>
    <div class="leftBar">
        <div class="features">
            <div class="header">
            </div>
            <div class="all" @click="toggleRightShow">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-list"></use>
                </svg>
            </div>
            <div class="draft" @click="toggleRightShow">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gaoyuan"></use>
                </svg>
            </div>
            <div class="collections" @click="toggleRightShow">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-shoucang-tianchong"></use>
                </svg>
            </div>
        </div>
        <div class="logOut" @click="toggleRightShow">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-log-out"></use>
            </svg>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
    data(){
        return {}
    },
    computed:{},
    methods:{
        ...mapActions(['toggleRightShow'])
    },
    created:function(){}
};
</script>
<style lang="less" scoped>
@import "@/assets/style/variable.less";
.leftBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 3rem;
  overflow: hidden;
  background: @color2;
  float: left;
  .features {
    .header {
      width: 2.2rem;
      height: 2.2rem;
      background: @color2;
      border-radius: 50%;
      border: 3px solid @color1;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 15rem;
    div {
      margin-top: 2rem;
    }
    .header {
        margin-top: 1rem
    }
    .iconfont {
      font-size: 1.5rem;
    }
  }
  .logOut {
      margin-top: 2.5rem;
  }
}
</style>
