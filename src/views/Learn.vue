<template>
    <van-dropdown-menu>
        <van-dropdown-item v-model="grade" :options="option1" @change="onGradeChange" />
        <van-dropdown-item v-model="subject" :options="option2[grade]" @change="onLoad" />
    </van-dropdown-menu>
    <div class="placeholder"></div>
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-card v-for="item, index in data.courseMsg.episode" :thumb="item.img"
            @click="onCardClick(index)">
            <template #title>
                <div class="title">
                    <van-icon color="#1989fa" name="video-o" />
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

const grade = ref('grade1')
const subject = ref('chinese')
const option1 = reactive([
    { text: '一年级', value: 'grade1' },
    { text: '二年级', value: 'grade2' },
    { text: '三年级', value: 'grade3' },
    { text: '四年级', value: 'grade4' },
    { text: '五年级', value: 'grade5' },
    { text: '六年级', value: 'grade6' },
    { text: '初一', value: 'grade7' },
    { text: '初二', value: 'grade8' },
    { text: '初三', value: 'grade9' },
    { text: '高一', value: 'grade10' },
    { text: '高二', value: 'grade11' },
    { text: '高三', value: 'grade12' },
])

const option2 = reactive({
    'grade1': [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
    ],
    'grade2': [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
    ],
    'grade3': [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    'grade4': [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    'grade5': [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    'grade6': [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    'grade7': [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    'grade8': [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    'grade9': [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    'grade10': [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    'grade11': [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    'grade12': [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
})

const loading = ref(false)
const finished = ref(false)

const fileData = ref('')
const data = reactive({
    courseMsg: {}
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
        finished.value = true;
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
})
</script>

<style scoped>
.van-dropdown-menu {
    z-index: 2999;
    position: fixed;
    top: 46;
    width: 100%;
}

.placeholder {
    height: 48px;
}

.van-card {
    /* margin-top: 0px; */
    margin: 10px;
    border-radius: 10px;
    box-shadow: 2px 2px 4px rgba(201, 201, 201, 0.3);
}

.title {
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