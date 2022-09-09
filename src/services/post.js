import { api } from "./api"

export const postService = {
    getList(params) {
        return api.call().get('/post/getListPagination.php',{params})
    },
    getListCategory () {
        return api.call().get('/categories/index.php')
    }
}