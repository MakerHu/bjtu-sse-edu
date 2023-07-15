<template>
    <van-nav-bar :title="route.meta.title" left-text="返回" left-arrow @click-left="goBack" />
    <router-view></router-view>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goBack = () => {
    router.back()
}
</script>

<style scoped>

</style>