<template>
    <div class="leftBox">
        <header>
            <h3>yfrz</h3>
        </header>
        <ul class="nav">
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    methods:{},
    mounted:{}
}
</script>
<style lang="less" scoped>
    .leftBox {
        .size(300px,100%);
        border-left: 1px solid grey;
        background: pink;
        header {
            .size(100%,150px);
            padding: 10px;
        }
    }
</style>
