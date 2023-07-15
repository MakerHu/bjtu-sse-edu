<template>
    <van-nav-bar :title="route.meta.title" />
    <router-view></router-view>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
        <van-tabbar-item icon="search" to="/learn">学习</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="/expand">拓展</van-tabbar-item>
        <van-tabbar-item icon="setting-o" to="/experience">经验</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const active = ref(0);
</script>

<style scoped></style>