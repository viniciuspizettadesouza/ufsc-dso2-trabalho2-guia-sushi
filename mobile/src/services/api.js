import axios from 'axios'

const api = axios.create({
    baseURL: 'http://200.135.86.35:3333'
})

export default api