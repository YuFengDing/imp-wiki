<template>
    <div class="wrapper" :style="isRightShow?active:''">
        
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {},
  props: {},
  data() {
    return {
      active: {
        width: "8rem"
      }
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["isRightShow"])
  },
  methods: {
    ...mapActions(["toggleRightShow"])
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
@import "@/assets/style/variable.less";
.wrapper {
  // position: absolute;
  // left: 3rem;
  width: 0rem;
  background: @color2;
  transition: 0.6s;
  display: flex;
}
</style>
