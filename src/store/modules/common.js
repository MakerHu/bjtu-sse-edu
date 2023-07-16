const common = {
    namespaced: true,
    state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state'))['common'] : {
        activePage: 'home',
        currentVideo: {}
    },
    // 唯一可以修改state值的方法，同步阻塞，通过commit调用
    mutations: {
        updateActivePage(state, activePage) {
            state.activePage = activePage
        },
        updateCurrentVideo(state, currentVideo) {
            state.currentVideo = currentVideo
        },
    },
    // 异步调用mutations方法，通过dispatch触发
    actions: {
        asyncUpdateActivePage (context, activePage) {
            context.commit('updateActivePage', activePage)
        },
        asyncCurrentVideo (context, currentVideo) {
            context.commit('updateCurrentVideo', currentVideo)
        },
    },
    // 唯一取值的方法，计算属性
    getters: {
        getActivePage(state) {
            return state.activePage
        },
        getCurrentVideo(state) {
            return state.currentVideo
        },
    }
}

export default common;