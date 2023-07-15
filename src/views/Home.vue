<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item,index in swipeImages">
            <van-image class="swipe-img" :src="item">
                <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                </template>
            </van-image>
        </van-swipe-item>
    </van-swipe>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import swipe1 from '@/assets/swipe1.jpeg'
import swipe2 from '@/assets/swipe2.jpg'

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

const swipeImages = [
    swipe1,
    swipe2,
    'https://bjtu.edu.cn/images/img2019/logo_01.png'
]

onMounted(() => {
    activePage.value = 'home'
})
</script>

<style scoped>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    /* line-height: 200px; */
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #42a2e2;
}

.swipe-img {
    height: 200px;
    width: 100%;
}
</style>