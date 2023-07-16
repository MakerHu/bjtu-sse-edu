<template>
    <van-tabs v-model:active="activeName">
        <div class="placeholder"></div>
        <van-tab v-for="item, index in expandData" :title="item.tagName" :name="item.tag">
            <ExpandCardsList v-model="item.tag"></ExpandCardsList>
        </van-tab>
    </van-tabs>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import ExpandCardsList from '@/views/ExpandCardsList.vue';

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

const activeName = ref('a');

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
:deep(.van-tabs__wrap) {
    z-index: 2999;
    position: fixed;
    top: 46;
    width: 100%;
}

.placeholder {
    height: 46px;
}
</style>