<template>
    这是经验页面
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
    activePage.value = 'experience'
})
</script>

<style scoped></style>