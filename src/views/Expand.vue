<template>
    <van-tabs v-model:active="expandActiveTag">
        <van-tab v-for="item, index in expandData" :title="item.tagName" :name="item.tag">
            <div class="expand-container">
                <CardsList :dataSource="'expand-'+item.tag"></CardsList>
            </div>
        </van-tab>
    </van-tabs>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import CardsList from '@/views/CardsList.vue';

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

const expandActiveTag = computed({
    get() {
        return store.getters['common/getExpandActiveTag']
    },
    set(value) {
        store.dispatch('common/asyncExpandActiveTag', value)
    }
})

const expandData = reactive([
    {
        tag: 'documentary',
        tagName: '纪录片',
        content: '纪录片内容',
    },
    {
        tag: 'knowledge',
        tagName: '趣味知识',
        content: '趣味知识内容',
    },
])

onMounted(() => {
    activePage.value = 'expand'
})
</script>

<style scoped>
.expand-container {
    /* 100px是头部和底部的高度之和，用于让中间内容占据剩余高度 */
    height: calc(100vh - 140px);
    /* 显示垂直滚动条 */
    overflow-y: auto;
}
</style>