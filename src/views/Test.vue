<template>
    
    <el-page-header class="goback" @back="goBack" icon="ArrowLeftBold">
        <template #title>
            <span>返回</span>
        </template>
        <template #content>
            <span>{{ route.meta.title }}</span>
        </template>
    </el-page-header>
    <div class="base-panel">
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()

const codeValue = ref('')

const goBack = () => {
    router.back()
}


onMounted(() => {

})
</script>

<style scoped>
.base-panel {
    display: flex;
    justify-content: center;
    padding: 20px;
}

.m-table {
    width: 800px
        /* width: 100%; */
}

.t-btn {
    padding: 2px;
    margin: 0 5px;
}

.code-panel {
    width: 800px;
    height: 500px;
}
</style>