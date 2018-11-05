<template>
    <div class="wrapper">
        <div class="pover">
            <div class="rectangle">

            </div>
        </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
@import "@/assets/style/variable.less";
.wrapper {
  .pover {
    position: absolute;
    width: 200px;
    height: 35px;
  }
  .rectangle {
    position: absolute;
    width: 200px;
    height: 200px;
    border: 3px solid @color2;
    border-radius: 15px;
    left: -145px;
    top: 60px;
    box-shadow: 0.2em 0.1em 0.1em #444242;
    background: url('../../assets/common/images/weChat.jpg') no-repeat;
    background-size: contain;
    }
  .rectangle::before {
    position: absolute;
    border: 15px solid transparent;
    border-top: 15px solid @color2;
    height: 0px;
    width: 0px;
    transform: rotate(180deg);
    content: "";
    top: -30px;
    left: 156px;
  }
  .rectangle::after {
    position: absolute;
    border: 11px solid transparent;
    border-top: 11px solid white;
    height: 0px;
    width: 0px;
    transform: rotate(180deg);
    content: "";
    top: -22px;
    left: 160px;
  }
}
</style>