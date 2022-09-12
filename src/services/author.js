import { ACCESS_TOKEN } from "../constants"
import { api } from "./api"

export const authorService = {
    login(params) {
        return api.call().post('/member/login.php', params)
    },
    register(params) {
        return api.call().get('/post/getListPagination.php', { params })
    },
    changePass(params) {
        return api.call().get('/post/getListPagination.php', { params })
    },
    fetchMe(token) {
        return api.call().post('/member/checktoken.php', { token: token }, { headers: { 'content-type': 'application/x-www-form-urlencoded' } })
    },
    getUser(id) {
        // const token = localStorage.getItem(ACCESS_TOKEN);, { headers: { 'Authorization': 'Bearer ' + token, 'content-type': 'application/x-www-form-urlencoded' } }
        return api.call().get('/member/member.php?userid='+id)
    }
}