const common = {
    namespaced: true,
    state: sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state'))['common'] : {
        activePage: 'home',
        grade: 'grade1',
        subject: 'chinese',
        expandActiveTag: 'documentary',
        currentVideo: {},
    },
    // 唯一可以修改state值的方法，同步阻塞，通过commit调用
    mutations: {
        updateActivePage(state, activePage) {
            state.activePage = activePage
        },
        updateCurrentVideo(state, currentVideo) {
            state.currentVideo = currentVideo
        },
        updateGrade(state, grade) {
            state.grade = grade
        },
        updateSubject(state, subject) {
            state.subject = subject
        },
        updateExpandActiveTag(state, expandActiveTag) {
            state.expandActiveTag = expandActiveTag
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
        asyncGrade (context, grade) {
            context.commit('updateGrade', grade)
        },
        asyncSubject (context, subject) {
            context.commit('updateSubject', subject)
        },
        asyncExpandActiveTag (context, expandActiveTag) {
            context.commit('updateExpandActiveTag', expandActiveTag)
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
        getGrade(state) {
            return state.grade
        },
        getSubject(state) {
            return state.subject
        },
        getExpandActiveTag(state) {
            return state.expandActiveTag
        },
    }
}

export default common;