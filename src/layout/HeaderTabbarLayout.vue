<template>
    <van-nav-bar :title="route.meta.title" left-text="返回" left-arrow @click-left="goBack" />
    <div class="placeholder"></div>
    <router-view></router-view>
    <van-tabbar v-model="activePage">
        <van-tabbar-item name="home" icon="wap-home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item name="learn" icon="orders-o" to="/learn">学习</van-tabbar-item>
        <van-tabbar-item name="expand" icon="cluster-o" to="/expand">拓展</van-tabbar-item>
        <van-tabbar-item name="experience" icon="bookmark-o" to="/experience">经验</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const store = useStore()
const route = useRoute()
const router = useRouter()

const activePage = computed({
    get() {
        return store.getters['common/getActivePage']
    },
    set(value) {
        store.dispatch('common/asyncUpdateActivePage', value)
    }
})

const goBack = () => {
    router.back()
}

</script>

<style scoped>
.van-nav-bar {
    z-index: 3000;
    position: fixed;
    top: 0;
    width: 100%;
}

/* 占位元素，防止顶部固定元素遮挡 */
.placeholder {
    height: 46px;
}
</style>