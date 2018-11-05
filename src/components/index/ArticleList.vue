<template>
  <div>
    <div class="article">
      <articleItem v-for="(item, index) in listData" :key="index" :content='item' />
    </div>
  </div>
</template>
<script>
import articleItem from '@/components/index/unit/articleItem'
export default {
  components: { articleItem },
  data () {
    return {
      listData: [],
      configs: {
        spellChecker: false // 禁用拼写检查
      }
    }
  },
  created: async function () {
    let { data } = await this.$fetch({
      url: '/queryAll',
      mock: require('../../../mocks/queryAll')
    })
    this.listData = data.reverse()
  }
}
</script>
<style>
/* @import "../../node_modules/simplemde/dist/simplemde.min.css"; */
</style>
