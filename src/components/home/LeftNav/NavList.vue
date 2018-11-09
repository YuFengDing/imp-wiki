<script>
export default {
    name:'NavList',
    data(){
        return {

        }
    },
    props:{
        list:{
            type:Array,
            required:true
        }
    },
    render(){
        return <ul>{this.list.map(item=>{
            return (<li>{item.label}</li>)
        })}</ul>
    },
    methods:{}    
}
</script>
<style lang="less" scoped>
li {
  height: 30px;
  background: red;
}
</style>
