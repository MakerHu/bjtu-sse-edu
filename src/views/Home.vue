<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
            <van-image class="swipe-img" src="/bjtu-sse-edu/src/assets/swipe1.jpeg">
                <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                </template>
            </van-image>
        </van-swipe-item>
        <van-swipe-item>
            <van-image class="swipe-img" src="/bjtu-sse-edu/src/assets/swipe2.jpg">
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