import { GET_POST_COMMENT } from "../../constants";
import { mappingComment } from "../../helpers";
import { commentServices } from "../../services/comment"

export const asyGetComment = (id) => {
    return async dispatch => {
        const res = await commentServices.getComment(id)
        const comment = res.data.data;
        const cm = mappingComment(comment)
        console.log(cm)
    }
}

export const reducerGetComment = comment => {
    return {
        type: GET_POST_COMMENT,
        payload: {
            comment
        }
    }
}

export const asyAddComment = (comment) => {
    return async dispatch => {
        
        const res = await commentServices.addComment(comment)
        console.log(res)
    }
}