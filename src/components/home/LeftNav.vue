<template>
    <div class="leftBox">
        <header>
            <p>yfrz</p>
            <p>记录新发现</p>
        </header>
        <ul class="nav">
            <li v-for="(it,index) in navConfig" :key='index'>
                {{it.label}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            navConfig:[{label:'编程',value:'code'},{label:'杂谈',value:'talking'},{label:'相册',value:'ablumn'},{label:'多媒体',value:'media'}]
        }
    },
    methods:{},
    mounted:{

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
</style>
