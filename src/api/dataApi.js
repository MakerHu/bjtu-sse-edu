import axios from 'axios'

export const getJson = async (url) => {
    let data
    await axios.get(url).then((res) => {
        data = res.data
    }).catch(() => {
    })
    return data
}

