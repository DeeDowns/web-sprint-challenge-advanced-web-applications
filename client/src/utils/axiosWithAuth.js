import axios from 'axios'

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: 'ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98'
            // localStorage.getItem('token')
        }
    })
}