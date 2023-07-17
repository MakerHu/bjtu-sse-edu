<template>
    <van-nav-bar :title="route.meta.title" left-text="返回" left-arrow @click-left="goBack" />
    <div class="placeholder"></div>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

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

.container {
    height: calc(100% - 100px);
    /* 100px是头部和底部的高度之和，用于让中间内容占据剩余高度 */
    overflow-y: auto;
    /* 显示垂直滚动条 */
    background-color: var(--edu-color-background);
}
</style>