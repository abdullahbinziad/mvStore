import axios from 'axios'
const api = axios.create({
    baseURL: 'https://mvstore-server.onrender.com/api'
})
export default api