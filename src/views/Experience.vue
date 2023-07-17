<template>
    <CardsList :dataSource="'experience-share'"></CardsList>
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

onMounted(() => {
    activePage.value = 'experience'
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