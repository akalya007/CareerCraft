import axios from 'axios'

const api = axios.create({
    baseURL: "https://careercraft-backend-xv3q.onrender.com"
})

export default api
