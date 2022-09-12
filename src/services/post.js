import { ACCESS_TOKEN } from "../constants";
import { api } from "./api"

export const postService = {
    getList(params) {
        return api.call().get('/post/getListPagination.php',{params})
    },
    getListCategory () {
        return api.call().get('/categories/index.php')
    },
    uploadImg (data) {
        const token = localStorage.getItem(ACCESS_TOKEN);
        return api.call().post('post/addNew.php',data,{headers: { 'Authorization': 'Bearer '+token }})
    }
}