import axios from 'axios'

const api = axios.create({
    baseURL:'http://10.0.2.2:3000',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
})

export default api;
