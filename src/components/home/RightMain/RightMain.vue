<template>
    <div class="main">
        <router-view></router-view>
        <footer>Copyright © 2018 dyf</footer>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .main {
        display: flex;
        flex: 1;
    }
    footer {
        position: absolute;
        bottom: 20px;
        right: 30px;
        font-size: 10px;
    }
</style>
