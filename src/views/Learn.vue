<template>
    <div class="learn-header">
        <van-dropdown-menu v-if="showSelection">
            <van-dropdown-item v-model="grade" :options="data.selection.grade" @change="onGradeChange" />
            <van-dropdown-item v-model="subject" :options="data.selection.subject[grade]" @change="onLoad" />
        </van-dropdown-menu>
    </div>
    <div class="learn-container">
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <van-card v-for="item, index in data.courseMsg.episode" :thumb="item.img" @click="onCardClick(index)">
                <template #title>
                    <div class="title">
                        <van-icon color="#1989fa" name="video-o"/>
                        <span>{{ item.title }}</span>
                    </div>
                </template>
                <template #desc>
                    <div class="desc-container">
                        <p class="desc-content">{{ item.desc }}</p>
                    </div>
                </template>
                <template #price>
                    <div class="duration">
                        <van-icon name="clock-o" />
                        <span>{{ item.duration }}</span>
                    </div>
                </template>
            </van-card>
        </van-list>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import commonUtil from '@/utils/commonUtil.js'
import { getJson } from '@/api/dataApi.js'

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

const currentVideo = computed({
    get() {
        return store.getters['common/getCurrentVideo']
    },
    set(value) {
        store.dispatch('common/asyncCurrentVideo', value)
    }
})

const grade = computed({
    get() {
        return store.getters['common/getGrade']
    },
    set(value) {
        store.dispatch('common/asyncGrade', value)
    }
})

const subject = computed({
    get() {
        return store.getters['common/getSubject']
    },
    set(value) {
        store.dispatch('common/asyncSubject', value)
    }
})

const selectionDataUrl = ref('')
const showSelection = ref(false)

const loading = ref(false)
const finished = ref(false)

const fileData = ref('')
const data = reactive({
    courseMsg: {},
    selection: {}
})

const onGradeChange = () => {
    subject.value = 'chinese'
    onLoad()
}

const onLoad = () => {
    fileData.value = commonUtil.getAssetsFile(grade.value + '-' + subject.value + '.json')
    // 异步更新数据
    getJson(fileData.value).then(res => {
        data.courseMsg = res

        // 加载状态结束
        loading.value = false
        // 数据全部加载完成
        finished.value = true
    })
}

const onCardClick = (index) => {
    currentVideo.value = data.courseMsg
    router.push({
        path: "/course",
        query: {
            episode_num: index
        }
    })
}

onMounted(() => {
    activePage.value = 'learn'
    selectionDataUrl.value = commonUtil.getAssetsFile('learn-selection.json')
    getJson(selectionDataUrl.value).then(res => {
        data.selection = res
        showSelection.value = true
    })
})
</script>

<style scoped>
.learn-header {
    /* z-index: 3000; */
    height: 46px;
}

.learn-container {
    /* 100px是头部和底部的高度之和，用于让中间内容占据剩余高度 */
    height: calc(100% - 50px);
    /* 显示垂直滚动条 */
    overflow-y: auto;
}

.van-card {
    /* margin-top: 0px; */
    background-color: white;
    margin: 10px;
    border-radius: 10px;
    box-shadow: var(--edu-box-shadow);
}

.title {
    font-size: 15px;
    font-weight: bold;
}

.desc-container {
    padding-top: 5px;
    height: 52px;
    /* 设置容器的高度为两行文字的高度 */
    overflow: hidden;
    /* 将超出范围的内容隐藏 */
}

.desc-content {
    display: -webkit-box;
    /* 使用WebKit的弹性盒模型 */
    -webkit-box-orient: vertical;
    /* 设置盒子内部元素垂直排列 */
    -webkit-line-clamp: 3;
    /* 最多显示两行文字 */
    line-height: 1.2;
    /* 设置行高 */
    max-height: 3.6em;
    /* 设置最多显示两行文字的高度 */
    text-overflow: ellipsis;
    /* 显示省略号 */
    overflow: hidden;
    /* 隐藏超出容器范围的内容 */
    word-wrap: break-word;
    /* 允许长单词换行 */
}

.duration {
    color: #969dad;
    font-weight: lighter;
}
</style>