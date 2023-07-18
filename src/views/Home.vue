<template>
    <div class="swipe-panel">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item, index in swipeImages">
                <van-image class="swipe-img" :src="item">
                    <template v-slot:loading>
                        <van-loading type="spinner" size="20" />
                    </template>
                </van-image>
            </van-swipe-item>
        </van-swipe>
    </div>

    <div class="slogan">
        <van-image class="home-logo" :src="homeLogo1">
            <template v-slot:loading>
                <van-loading type="spinner" size="20" />
            </template>
        </van-image>
        <span>
            英雄上马的地方
        </span>
        <van-image class="home-logo" :src="emblem">
            <template v-slot:loading>
                <van-loading type="spinner" size="20" />
            </template>
        </van-image>
    </div>

    <div class="menu-panel">
        <div class="menu" @click="onMenuClick('learn')">
            <div class="menu-header">
                <div class="menu-icon menu-learn">
                    <van-icon name="orders-o" color="#ffffff" size="25px" />
                </div>
            </div>
            <div class="menu-container">
                <div class="menu-title">课程学习</div>
                <div class="menu-desc">提供一年级到高三的高质量课程</div>
            </div>
        </div>
        <div class="menu" @click="onMenuClick('expand')">
            <div class="menu-header">
                <div class="menu-icon menu-expand">
                    <van-icon name="cluster-o" color="#ffffff" size="25px" />
                </div>
            </div>
            <div class="menu-container">
                <div class="menu-title">知识拓展</div>
                <div class="menu-desc">纪录片、趣味知识开拓你的视野</div>
            </div>
        </div>
        <div class="menu" @click="onMenuClick('experience')">
            <div class="menu-header">
                <div class="menu-icon menu-experience">
                    <van-icon name="bookmark-o" color="#ffffff" size="25px" />
                </div>
            </div>
            <div class="menu-container">
                <div class="menu-title">经验分享</div>
                <div class="menu-desc">提供各科高效的学习经验</div>
            </div>
        </div>
    </div>

    <div class="sys-desc">
        <div class="sys-desc-title"><van-icon name="flag-o" size="20px" color="#5a96f8" />介绍</div>
        <p class="sys-desc-content">
            介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容
        </p>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import homeLogo1 from '@/assets/images/home-logo1.png'
import emblem from '@/assets/images/emblem.svg'
import swipe1 from '@/assets/images/swipe1.jpeg'
import swipe2 from '@/assets/images/swipe2.jpg'

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
    // swipe2,
    // 'https://bjtu.edu.cn/images/img2019/logo_01.png'
]

const onMenuClick = (to) => {
    router.push('/' + to)
}

onMounted(() => {
    activePage.value = 'home'
})
</script>

<style scoped>
.slogan {
    /* width: 100%; */
    background-color: #ffffff;
    border-radius: 15px;
    margin: 10px 20px;
    box-shadow: var(--edu-box-shadow);
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 25px;
}

.home-logo {
    width: 40px;
}

.swipe-panel {
    width: 100%;
}

.my-swipe .van-swipe-item {
    aspect-ratio: 16/9;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.swipe-img {
    aspect-ratio: 16/9;
    width: calc(100% - 40px);
    border-radius: 15px;
    box-shadow: var(--edu-box-shadow);
}

:deep(.swipe-img) img {
    border-radius: 15px;
}

:deep(.van-image__loading) {
    border-radius: 15px;
}

.menu-panel {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5px 10px;
}

.menu-header {
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.menu-container {
    text-align: center;
}

.menu {
    padding: 5px;
    aspect-ratio: 3/4;
    margin: 5px;
    background-color: #ffffff;
    border-radius: 15px;
    width: 30%;
    box-shadow: var(--edu-box-shadow);
}

.menu-icon {
    width: 50%;
    aspect-ratio: 1/1;
    background-color: #5a96f8;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: 50%;
}

.menu-learn {
    background-color: #5a96f8;
}

.menu-expand {
    background-color: #52b4bf;
}

.menu-experience {
    background-color: #f1a43c;
}

.menu-title {
    font-weight: bold;
}

.menu-desc {
    color: #888888;
    font-size: 12px;
}

.sys-desc {
    margin: 10px 20px;
    padding: 5px 10px;
    border-radius: 15px;
    background-color: #ffffff;
}

.sys-desc-title {
    font-weight: bold;
    text-align: center;
    color: #5a96f8;
}

.sys-desc-content {
    font-size: small;
}
</style>