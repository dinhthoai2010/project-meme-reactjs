import { GET_LIST_CATEGORY } from "../../constants"
import { hasListPost } from "../../helpers"
import { postService } from "../../services/post"

export const GET_LIST_POST = "GET_LIST_POST"

export function asyReducerGetListPost(params) {
    return async (dispatch) => {
        try {
            const lists = await postService.getList(params)
            let data = lists.data.posts
            const posts = hasListPost(data);
            dispatch(reducerGetListPost(posts))
            return posts
        } catch (error) {
            return false;
        }
    }
}

function reducerGetListPost(posts) {
    return {
        type: GET_LIST_POST,
        payload: {
            posts: posts
        }
    }
}


export function asyGetListCategory() {
    return async (dispatch) => {
        try {
            const listsCategory = await postService.getListCategory()
            let data = listsCategory.data.categories;
            if(data===undefined) return {
                status: 0,
                message : "Co loi say ra"
            }
            dispatch(reducerGetListCategory(data))
        } catch (error) {
            console.log(error)
        }

    }

}

function reducerGetListCategory(data) {
    return {
        type: GET_LIST_CATEGORY,
        payload: {
            posts: data
        }
    }
}