<template>
    <div class="video-page-header">
        <van-nav-bar :title="currentVideo.title" left-arrow @click-left="goBack" />
    </div>

    <div class="video-page-container">
        <div class="video-container">
            <iframe class="video" :src="currentVideo.episode[selectedValue].url" scrolling="no" border="0" frameborder="no"
                framespacing="0" allowfullscreen="true"> </iframe>
        </div>

        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="msg-panel">
                <div class="course-title"><van-icon name="orders-o" />
                    {{ currentVideo.title }}
                    <van-divider v-if="currentVideo.episode[selectedValue].title" vertical :style="{ borderColor: '#1989fa' }" />
                    {{ currentVideo.episode[selectedValue].title }}
                </div>
                <p class="course-desc">{{ currentVideo.episode[selectedValue].desc }}</p>
            </div>

            <div class="msg-panel" v-if="currentVideo.episode.length > 1">
                <van-picker :columns="currentVideo.episode" :columns-field-names="customFieldName" :visible-option-num="selectionSize" @change="onChange">
                    <template #toolbar>
                        选集
                    </template>
                </van-picker>
            </div>
        </van-list>

    </div>

    <!-- <van-floating-panel v-model:height="height" :anchors="anchors">
        <van-picker :columns="currentVideo.episode" :columns-field-names="customFieldName" @change="onChange">
            <template #toolbar>
                选集
            </template>
        </van-picker>
    </van-floating-panel> -->
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'

const route = useRoute()
const router = useRouter()
const store = useStore()


const loading = ref(false);
const finished = ref(true);

const height = ref(0)
const anchors = [
    60,
    Math.round(0.6 * window.innerHeight),
]

const data = reactive({
    baseMsg: {}
})

const customFieldName = {
    text: 'title',
    value: 'index',
}

const selectedValue = ref(0)

const activePage = computed({
    get() {
        return store.getters['common/getActivePage']
    },
    set(value) {
        store.dispatch('common/asyncUpdateActivePage', value)
    }
})

const currentVideo = computed({
    get() {
        return store.getters['common/getCurrentVideo']
    },
    set(value) {
        store.dispatch('common/asyncCurrentVideo', value)
    }
})

const selectionSize = computed(() => {
    return currentVideo.value.episode.length < 5 ? currentVideo.value.episode.length:5
})

const goBack = () => {
    router.push('/' + activePage.value)
}

const onChange = ({ selectedValues }) => {
    selectedValue.value = selectedValues[0]
};

onMounted(() => {
    currentVideo.value.episode.forEach((item, index) => {
        item['index'] = index
    })
})
</script>

<style scoped>
.video-page-header {
    height: 46px;
}

.video-page-container {
    /* 100px是头部和底部的高度之和，用于让中间内容占据剩余高度 */
    height: calc(100% - 46px);
    /* 显示垂直滚动条 */
    overflow-y: auto;
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

.msg-panel {
    margin: 10px;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 2px 2px 4px rgba(201, 201, 201, 0.3);
}

.course-title {
    font-weight: bold;
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