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
        return api.author().post('/member/checktoken.php', { token: token })
    },
    getUser(id) {
        return api.call().get('/member/member.php?userid='+id)
    }
}