<template>
    <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了">
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
            <!-- <van-image class="home-logo" :src="homeLogo1">
            <template v-slot:loading>
                <van-loading type="spinner" size="20" />
            </template>
        </van-image> -->
            <!-- <span>
                积跬步至千里，积小流成江海
            </span> -->
            <van-image class="card-img" :src="sloganImg">
                <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                </template>
            </van-image>
            <!-- <van-image class="home-logo" :src="emblem">
            <template v-slot:loading>
                <van-loading type="spinner" size="20" />
            </template>
        </van-image> -->
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

        <div class="dailyQuote" v-if="data.dailyPoetry.content">
            <div class="dailyQuote-title">今日诗词</div>
            <div class="dailyQuote-content">{{ data.dailyPoetry.content }}</div>
            <div class="dailyQuote-from">{{ data.dailyPoetry.origin && data.dailyPoetry.origin.title ?
                '——《' + data.dailyPoetry.origin.title + '》' : '' }}</div>
        </div>

        <div class="dailyQuote" v-if="data.dailyQuote.hitokoto">
            <div class="dailyQuote-title">每日一句</div>
            <div class="dailyQuote-content">{{ data.dailyQuote.hitokoto }}</div>
            <div class="dailyQuote-from">{{ data.dailyQuote.from ? '——' + data.dailyQuote.from : '' }}</div>
        </div>

        <div class="sys-desc">
            <div class="sys-desc-title">关于我们</div>
            <p>
                欢迎来到科左后旗学习小助手！
            </p>
            <p class="sys-desc-content">
                我们是北京交通大学软件学院研究生暑期社会实践团，为内蒙古科左后旗的中小学生们量身打造了一个全面、丰富的学习资源平台。在这里，你可以找到丰富多样的学习资源，包括从小学一年级到初中三年级课内各科的知识点、教材讲解，同时也提供了各种拓展学习资源，如优秀纪录片、学习经验分享等。希望你们可以在这里尽情探索，享受成长的喜悦；展翅高飞，追求知识的无尽辽阔。
            </p>
            <p class="sys-desc-content">
                让我们携手前行，让知识的海洋无边界，为梦想努力，点燃未来的希望！
            </p>
        </div>
    </van-list>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { getDailyQuote } from '@/api/dataApi.js'
import jinrishici from '@/utils/jinrishici.js'

import homeLogo1 from '@/assets/images/home-logo1.png'
import sloganImg from '@/assets/images/slogan.png'
import emblem from '@/assets/images/emblem.svg'
import swipe1 from '@/assets/images/swipe1.jpeg'
import swipe2 from '@/assets/images/swipe2.jpg'

const store = useStore()
const route = useRoute()
const router = useRouter()

const loading = ref(false)
const finished = ref(true)

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

const data = reactive({
    dailyQuote: {},
    dailyPoetry: {}
})

const onMenuClick = (to) => {
    router.push('/' + to)
}

const refreshDailyQuote = () => {
    // 异步更新数据
    getDailyQuote().then(res => {
        data.dailyQuote = res
    }).catch((err) => {

    })
}

onMounted(() => {
    activePage.value = 'home'
    refreshDailyQuote()
    jinrishici.load(result => {
        data.dailyPoetry = result.data
    }, err => {
        console.log(err);
    })
})
</script>

<style scoped>
.slogan {
    background-color: #ffffff;
    border-radius: 15px;
    margin: 0px 20px 10px 20px;
    box-shadow: var(--edu-box-shadow);
    padding: 5px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 22px;
    font-family: "STXingkai", "KaiTi", cursive;
    font-family: "STXingkai", "KaiTi", "楷体", "Microsoft YaHei", "微软雅黑", "SimSun", "宋体", sans-serif;
}

.card-img {
    width: 100%;
    aspect-ratio: 15/2;
    border-radius: 15px;
}

:deep(.card-img) img {
    border-radius: 15px;
}

:deep(.van-image__loading) {
    border-radius: 15px;
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
    /* padding: 5px 10px; */
    margin: 10px 15px;
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
    margin: 0 5px;
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
    box-shadow: var(--edu-box-shadow);
}

.sys-desc-title {
    font-weight: bold;
    /* text-align: center; */
    /* color: #5a96f8; */
}

.sys-desc-content {
    text-indent: 2em;
    /* 两个字符的缩进，em是相对于当前字体尺寸的单位 */
}

.dailyQuote {
    margin: 10px 20px;
    padding: 5px 10px;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: var(--edu-box-shadow);
}

.dailyQuote-title {
    font-weight: bold;
    /* text-align: center; */
    /* color: #5a96f8; */
}

/* .dailyQuote-content {
    text-align: center;
} */

.dailyQuote-from {
    text-align: right;
}
</style>