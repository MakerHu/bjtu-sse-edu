import axios from 'axios'

export const getJson = async (url) => {
    let data
    await axios.get(url).then((res) => {
        data = res.data
    }).catch(() => {
    })
    return data
}

export const getDailyQuote = async () => {
    let data
    let url = 'https://v1.hitokoto.cn/?c=d&c=h&c=k'
    await axios.get(url).then((res) => {
        data = res.data
    }).catch(() => {
    })
    return data
}

