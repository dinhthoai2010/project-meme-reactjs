import { ADD_POST_COMMENT, GET_POST_COMMENT } from "../../constants";


const intState = {
    comment: {},
    listComment: []
}

function reducer(userState = intState, action) {
    switch (action.type) {
        case GET_POST_COMMENT:
            return {
                ...userState,
                listComment:action.payload.comment,
            }
        case ADD_POST_COMMENT : 
        return {
            ...userState,
            listComment: [action.payload.comment,...userState.listComment]
        }
        default:
            return userState
    }
}

export default reducer;