import { api } from "./api"


export const commentServices = {
    getComment(id) {
        return api.call().get('/comment/comments.php?postid='+id)
    },
}
