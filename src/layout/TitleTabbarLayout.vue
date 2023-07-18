<template>
    <div class="ttl-header">
        <van-nav-bar :title="route.meta.title" />
    </div>
    <div class="ttl-container">
        <router-view></router-view>
    </div>
    <div class="ttl-footer">
        <van-tabbar v-model="activePage">
            <van-tabbar-item name="home" icon="wap-home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item name="learn" icon="orders-o" to="/learn">学习</van-tabbar-item>
            <van-tabbar-item name="expand" icon="cluster-o" to="/expand">拓展</van-tabbar-item>
            <van-tabbar-item name="experience" icon="bookmark-o" to="/experience">经验</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

const store = useStore()
const route = useRoute()

const activePage = computed({
    get() {
        return store.getters['common/getActivePage']
    },
    set(value) {
        store.dispatch('common/asyncUpdateActivePage', value)
    }
})
</script>

<style scoped>
.ttl-header {
    z-index: 3000;
    height: 46px;
}

.ttl-container {
    /* 100px是头部和底部的高度之和，用于让中间内容占据剩余高度 */
    height: calc(100% - 96px);
    /* 显示垂直滚动条 */
    overflow-y: auto;
}
</style>