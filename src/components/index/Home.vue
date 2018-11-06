<template>
  <div class="mainWrapper">
    <div class="title">
      <div class="iconList" @click="toggleExpand" :class="{isExpand:isExpand}">
        <span class="name">
          imp
        </span>
        <span class="github">
          <a href="https://github.com/YuFengDing" target="_blank">
            <i class="iconfont">&#xea0a;</i>
          </a>
        </span>
        <span class="weibo">
          <a href="https://weibo.com/u/1954781094/home?wvr=5&lf=reg" target="_blank">
            <i class="iconfont">&#xe65a;</i>
          </a>
        </span>
        <span class="weChat" @mouseover="showWeChat(true)" @mouseout="showWeChat(false)">
          <pover v-if="weChat" />
          <i class="iconfont">&#xe658;</i>
        </span>
      </div>
      <ul class="nav">
        <li class="all" @click="goHome">文章</li>
        <li class="tags" @click="goTags">标签</li>
        <!-- <li class="me" @click="goContact">联系</li> -->
      </ul>
    </div>
    <div class="content">
      <transition>
        <router-view></router-view>

      </transition>
    </div>
  </div>
</template>
<script>
import goRoute from "../../assets/utils/utils";
import Pover from "./unit/Pover";
import { setTimeout, clearTimeout } from "timers";
export default {
  name: "",
  components: {
    Pover
  },
  data() {
    return {
      isExpand: false,
      weChat: false,
      timer: ""
    };
  },
  methods: {
    goHome() {
      goRoute(this, "/ArticleList");
    },
    goTags() {
      goRoute(this, "/Tags");
    },
    showWeChat(k) {
      this.weChat = k;
    },
    toggleExpand() {
      clearTimeout(this.timer);
      this.isExpand = !this.isExpand;
      this.weChat = false;
      if (this.isExpand) {
        this.timer = setTimeout(() => {
          this.weChat = false;
          this.isExpand = false;
        }, 5000);
      }
    }
    // goContact() {
    //   goRoute(this, "/Contact");
    // }
  },
  created: function() {},
  mounted: function() {}
};
</script>
<style lang="less" scoped>
@import '../../assets/style/font-family.less';

.mainWrapper {
  font-size: 15px;
  .title {
    display: flex;
    height: 4em;
    justify-content: space-between;
    align-items: center;
    // background: @color2;
    padding: 0 5em;
    user-select: none;
    position: relative;
    span {
      display: inline-block;
      width: 3em;
      height: 3em;
      overflow: hidden;
    }
    .iconList {
      font-family: firstFont;
      line-height: 3em;
      height: 3em;
      width: 3em;
      overflow: hidden;
      // transition: 0.5s;
      background: @color1;
      border-radius: 3em;
      box-shadow: 0.2em 0.1em 0.1em #444242;
      .iconfont {
        font-size: 1.5em;
        margin: 0 0.5em;
      }
      .github {
        margin-left: 1em;
      }
    }
    .isExpand {
      width: 15em;
    }
    .name {
      background: @color2;
      display: inline-block;
      width: 3em;
      height: 3em;
      border-radius: 3em;
      text-align: center;
      border-radius: 3rem;
      color: @color1;
    }
    ul {
      li {
        float: left;
        list-style-type: none;
        line-height: 2em;
        font-size: 1em;
        color: @color1;
        width: 3em;
        height: 2em;
        border-bottom: 2px solid transparent;
        text-align: center;
        margin-right: 3em;
      }
      li:hover {
        border-bottom: 2px solid @color1;
      }
    }
  }
}
</style>
