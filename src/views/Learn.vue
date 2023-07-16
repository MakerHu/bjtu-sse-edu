<template>
    <van-dropdown-menu>
        <van-dropdown-item v-model="grade" :options="option1" />
        <van-dropdown-item v-model="suject" :options="option2[grade]" />
    </van-dropdown-menu>

    {{ data.primary }}
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import commonUtil from '@/utils/commonUtil.js'
import axios from 'axios'

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

const grade = ref(1)
const suject = ref('chinese')
const option1 = reactive([
    { text: '一年级', value: 1 },
    { text: '二年级', value: 2 },
    { text: '三年级', value: 3 },
    { text: '四年级', value: 4 },
    { text: '五年级', value: 5 },
    { text: '六年级', value: 6 },
    { text: '初一', value: 7 },
    { text: '初二', value: 8 },
    { text: '初三', value: 9 },
    { text: '高一', value: 10 },
    { text: '高二', value: 11 },
    { text: '高三', value: 12 },
])

const option2 = reactive({
    1: [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
    ],
    2: [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
    ],
    3: [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    4: [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    5: [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    6: [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    7: [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    8: [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    9: [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    10: [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    11: [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
    12: [
        { text: '语文', value: 'chinese' },
        { text: '数学', value: 'math' },
        { text: '英语', value: 'engligh' },
    ],
})

const fileData = ref('')
const data = reactive({
    primary: {}
})

const requestJson = (url) => {
  axios.get(url).then((res) => {
    console.log('res.data = ', res.data)
    data.primary = res.data
  })
  .catch(()=>{
  })
  
}

onMounted(() => {
    activePage.value = 'learn'
    fileData.value = commonUtil.getAssetsFile('primary.json')
    requestJson(fileData.value)
})
</script>

<style scoped></style>