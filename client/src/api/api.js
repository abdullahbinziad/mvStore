import axios from 'axios'
// const local = 'https://mvstore-server.onrender.com'
const production = 'https://mvstore-server.onrender.com'
const api = axios.create({
    baseURL: `${production}/api`,
    withCredentials : true
})
export default api