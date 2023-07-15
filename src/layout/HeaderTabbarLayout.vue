<template>
    <van-nav-bar :title="route.meta.title" left-text="返回" left-arrow @click-left="goBack" />
    <router-view></router-view>
    <van-tabbar v-model="activePage">
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/learn">学习</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/home">拓展</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/home">经验</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goBack = () => {
    router.back()
}

const activePage = ref(0);
</script>

<style scoped></style>