import { GET_POST_DES } from "../../constants";
import { mappingComment } from "../../helpers";
import { commentServices} from "../../services/comment"

export const asyGetComment = (id) => {
    return async dispatch => {
        const res = await commentServices.getComment(id)
        const comment = res.data.data;
        const cm = mappingComment(comment)
        // dispatch()
        console.log(cm)
    }
}

export const reducerGetComment = comment => {
    return {
        type: GET_POST_DES,
        payload: {
            comment
        }
    }
}