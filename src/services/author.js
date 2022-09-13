import { api } from "./api"

export const authorService = {
    login(params) {
        return api.call().post('/member/login.php', params)
    },
    register(params) {
        return api.call().post('/member/register.php', params)
    },
    changePass(params) {
        return api.token().get('/member/password.php', params)
    },
    fetchMe(token) {
        return api.author().post('/member/checktoken.php', { token: token })
    },
    getUser(id) {
        return api.call().get('/member/member.php?userid=' + id)
    },
    updateUser(formData) {
        return api.token().post("/member/update.php", formData);
    }
}