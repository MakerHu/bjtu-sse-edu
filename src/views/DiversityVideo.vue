<template>
    <van-nav-bar :title="currentVideo.title" left-arrow @click-left="goBack" />
    <div class="placeholder"></div>

    <div class="video-container">
        <iframe class="video" :src="currentVideo.episode[selectedValue].url" scrolling="no" border="0" frameborder="no"
            framespacing="0" allowfullscreen="true"> </iframe>
    </div>

    <div class="msg-container">
        <div class="course-title"><van-icon name="orders-o" />{{ currentVideo.episode[selectedValue].title }}</div>
        <p class="course-desc">{{ currentVideo.episode[selectedValue].desc }}</p>
    </div>

    <div class="msg-container">
        <div class="course-title"><van-icon name="orders-o" />{{ currentVideo.title }}</div>
        <pre class="course-desc">{{ currentVideo.desc }}</pre>
    </div>

    <van-floating-panel>
        <van-picker :columns="currentVideo.episode" :columns-field-names="customFieldName" @change="onChange">
            <template #toolbar>
                选集
            </template>
        </van-picker>
    </van-floating-panel>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()

const data = reactive({
    baseMsg: {}
})

const customFieldName = {
    text: 'title',
    value: 'index',
}

const selectedValue = ref(0)

const currentVideo = computed({
    get() {
        return store.getters['common/getCurrentVideo']
    },
    set(value) {
        store.dispatch('common/asyncCurrentVideo', value)
    }
})

const goBack = () => {
    router.push('/expand')
}

const onChange = ({ selectedValues }) => {
    selectedValue.value = selectedValues[0]
};

onMounted(() => {
    currentVideo.value.episode.forEach((item, index) => {
        item['index'] = index
    });
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
    margin: 10px;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 10px;
    background-color: #f7f8fa;
    box-shadow: 2px 2px 4px rgba(201, 201, 201, 0.3);
}

.course-title {
    font-weight:bold;
}

.course-desc {
    white-space: pre-wrap;
}

:deep(.van-picker__toolbar) {
    display: block;
    text-align: center;
    font-weight: bold;
}
</style>