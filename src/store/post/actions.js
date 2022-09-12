import { GET_LIST_CATEGORY, GET_LIST_POST, GET_LIST_POST_SEARCH, GET_POST_DES } from "../../constants"
import { hasListPost, mappingCategory, mappingComment, mappingPostDes, mappingUser } from "../../helpers"
import { authorService } from "../../services/author"
import { commentServices } from "../../services/comment"
import { postService } from "../../services/post"
import { reducerGetComment } from "../comment/action"


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
            if (data === undefined) return {
                status: 0,
                message: "Co loi say ra"
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

export const handleUploadImage = (dataForm) => {

    return async (dispatch) => {
        try {
            const res = await postService.uploadImg(dataForm)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
}

export const asySearchPost = (key, auto = false) => {
    return async dispatch => {
        try {
            const listPost = await postService.getPostByKey(key);
            const lists = listPost.data;
            const hasPost = hasListPost(lists.posts)
            if (auto)
                dispatch(reducerGetListPostSearch(hasPost))
            return hasPost;
        } catch (error) {
            return error
        }
    }
}

function reducerGetListPostSearch(posts) {
    return {
        type: GET_LIST_POST_SEARCH,
        payload: {
            posts
        }
    }
}


export const aysGetPost = (id) => {
    return async dispatch => {
        try {
            const resPost = await postService.getPost(id);
            const resComment = await commentServices.getComment(id);
            let post = resPost.data.data;
            const comment = mappingComment(resComment.data.comments)

            if (post.post !== undefined) {
                const user = await authorService.getUser(post.post.USERID);
                // post.user = mappingUser(user.data.user)
                // post.post = mappingPostDes(post.post)
                // post.categories = mappingCategory(post.categories)

                post = {
                    user: mappingUser(user.data.user),
                    post :{...mappingPostDes(post.post), count:comment.length},
                    categories:mappingCategory(post.categories)
                }
                dispatch(reducerGetPost(post, user))
                dispatch(reducerGetComment(comment))

            }


        } catch (error) {
            return error
        }
    }
}

function reducerGetPost(post) {
    return {
        type: GET_POST_DES,
        payload: {
            post: post
        }
    }
}

