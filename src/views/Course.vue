<template>
    <van-nav-bar :title="route.meta.title" left-text="返回" left-arrow @click-left="goBack" />
    <div class="placeholder"></div>
    
    <div class="video-container">
        <iframe class="video" :src="route.query.url" scrolling="no" border="0" frameborder="no" framespacing="0"
            allowfullscreen="true"> </iframe>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goBack = () => {
    router.push('/learn')
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

.video-container {
  aspect-ratio: 16/9; /* 设置视频的宽高比为16:9 */
  width: 100%; /* 设置容器宽度为100% */
}

.video {
    width: 100%;
    height: 100%;
}
</style>