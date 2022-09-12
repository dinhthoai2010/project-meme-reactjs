import { api } from "./api"


export const commentServices = {
    getComment(id) {
        return api.call().get('/comment/comments.php?postid='+id)//
    },
    addComment(comment) {
        return api.token().post('/comment/add_new.php', comment)
    }
}
