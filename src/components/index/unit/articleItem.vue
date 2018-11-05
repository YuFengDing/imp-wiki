<template>
  <div class="wrapper">
    <div class='item'>
      <div class='title'>
        <h1>{{content.title}}</h1>
        <div class="info">
          <span>
            <!-- <i class="iconfont">&#xe601;</i> -->
            {{content.time}}
          </span>
          <span>
            <i class="iconfont">&#xec34;</i>{{content.tags}}</span>
        </div>
      </div>
      <div class="content" v-html="html" />
    </div>
    <div class="details">
      全文阅读
    </div>
  </div>
</template>
<script>
import md from "markdown-it";
export default {
  props: ["content"],
  data() {
    return {};
  },
  computed: {
    html() {
      return md().render(this.content.content);
    }
  },
  methods: {},
  created: function() {
    console.log(this.content);
  }
};
</script>
<style lang="less" scoped>
@import "@/assets/style/variable.less";
.wrapper {
  width: 750px;
  height: 260px;
  margin: 30px auto 40px;
  .details {
    float: right
  }
  .item {
    width: 750px;
    height: 250px;
    margin: 30px auto 40px;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    .title {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dotted @color2;
      .info {
        display: inline-flex;
        align-items: flex-end;
        margin-bottom: 0.5em;
        span {
          margin-left: 2em;
          i {
            margin-right: 0.5em;
          }
        }
      }
      h1 {
        display: inline-block;
        letter-spacing: 3px;
        font-family: "Montserrat", "Helvetica Neue", "Hiragino Sans GB",
          "LiHei Pro", Arial, sans-serif;
        font-weight: 400;
        color: #444;
        text-transform: uppercase;
      }
    }
  }
}
</style>
