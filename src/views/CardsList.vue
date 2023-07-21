<template>
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <div class="card-container">
            <div class="m-card" v-for="item, index in data.msg.records" @click="onCardClick(item)">
                <van-image class="card-img" :src="item.img">
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>
                <div class="card-content">
                    <div class="card-name">{{ item.title }}</div>
                    <div class="duration">
                        <van-icon name="clock-o" />
                        <span>{{ item.duration }}</span>
                    </div>
                </div>
            </div>
        </div>
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

const props = defineProps(['dataSource'])
const emit = defineEmits(['update:dataSource'])

const loading = ref(false)
const finished = ref(false)
const fileData = ref('')
const data = reactive({
    msg: {}
})

const currentVideo = computed({
    get() {
        return store.getters['common/getCurrentVideo']
    },
    set(value) {
        store.dispatch('common/asyncCurrentVideo', value)
    }
})

const mDataSource = computed({
    get() {
        return props.dataSource
    },
    set(value) {
        emit('update:dataSource', value)
    }
})

const expandActiveTag = computed({
    get() {
        return store.getters['common/getExpandActiveTag']
    },
    set(value) {
        store.dispatch('common/asyncExpandActiveTag', value)
    }
})

const onLoad = () => {
    fileData.value = commonUtil.getAssetsFile(mDataSource.value + '.json')
    // 异步更新数据
    getJson(fileData.value).then(res => {
        data.msg = res

        // 加载状态结束
        loading.value = false
        // 数据全部加载完成
        finished.value = true;
    })
}

const onCardClick = (item) => {
    currentVideo.value = item
    router.push({
        path: "/video",
        query: {
            episode_num: 1
        }
    })
}

onMounted(() => {

})
</script>

<style scoped>
.card-container {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.m-card {
    margin: 5px;
    background-color: #ffffff;
    border-radius: 10px;
    width: 45%;
    box-shadow: var(--edu-box-shadow);
}

.card-img {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 10px;
}

:deep(.card-img) img {
    border-radius: 10px 10px 0 0;
}

:deep(.van-image__loading) {
    border-radius: 10px 10px 0 0;
}

.card-content {
    padding: 0 5px;
}

.card-name {
    white-space: nowrap;
    /* 禁止文本换行 */
    overflow: hidden;
    /* 隐藏超出容器范围的内容 */
    text-overflow: ellipsis;
    /* 显示省略号 */
}

.duration {
    color: #969dad;
    font-weight: lighter;
    font-size: small;
}
</style>