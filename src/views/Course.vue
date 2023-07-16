<template>
    <van-nav-bar :title="data.baseMsg.courseName + ' | ' + data.baseMsg.title" left-arrow @click-left="goBack" />
    <div class="placeholder"></div>

    <div class="video-container">
        <iframe class="video" :src="data.baseMsg.url" scrolling="no" border="0" frameborder="no" framespacing="0"
            allowfullscreen="true"> </iframe>
    </div>

    <div class="msg-container">
        <div class="course-title"><van-icon name="orders-o" />{{ data.baseMsg.title }}</div>
        <p class="course-desc">{{ data.baseMsg.desc }}</p>
    </div>

    <div class="msg-container">
        <div class="course-title"><van-icon name="orders-o" />{{ data.baseMsg.courseName }}</div>
        <pre class="course-desc">{{ data.baseMsg.courseDesc }}</pre>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const data = reactive({
    baseMsg: {}
})

const goBack = () => {
    router.push('/learn')
}

onMounted(() => {
    data.baseMsg = route.query
})
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
    aspect-ratio: 16/9;
    /* 设置视频的宽高比为16:9 */
    width: 100%;
    /* 设置容器宽度为100% */
}

.video {
    width: 100%;
    height: 100%;
}

.msg-container {
    margin:10px;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 10px;
    background-color: #f7f8fa;
    box-shadow: 2px 2px 4px rgba(201, 201, 201, 0.3);
}

.course-title {
    font-weight: bold;
}

.course-desc {
    white-space: pre-wrap;
}
</style>