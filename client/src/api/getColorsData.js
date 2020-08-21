import {axiosWithAuth} from '../utils/axiosWithAuth'

export const getColorsData = () => {
    return axiosWithAuth().get('/api/colors')
    .then(res => {
        return res
    })
}