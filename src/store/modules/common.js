const common = {
    namespaced: true,
    state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state'))['common'] : {
        activePage: 'home'
    },
    // 唯一可以修改state值的方法，同步阻塞，通过commit调用
    mutations: {
        updateActivePage(state, activePage) {
            state.activePage = activePage
        }
    },
    // 异步调用mutations方法，通过dispatch触发
    actions: {
        asyncUpdateActivePage (context, activePage) {
            context.commit('updateActivePage', activePage)
        }
    },
    // 唯一取值的方法，计算属性
    getters: {
        getActivePage(state) {
            return state.activePage
        }
    }
}

export default common;