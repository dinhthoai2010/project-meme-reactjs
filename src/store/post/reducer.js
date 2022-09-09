import { GET_LIST_CATEGORY } from "../../constants";
import { GET_LIST_POST } from "./actions";

const intState = {
    listPost: [],
    listCategory: [],
    PostDes: {}
}

function reducer(postState = intState, action) {
    switch (action.type) {
        case GET_LIST_POST:
            return {
                ...postState,
                listPost: [...postState.listPost, ...action.payload.posts]
            }

        case GET_LIST_CATEGORY:
            return {
                ...postState,
                listCategory: action.payload.posts
            }
        default:
            return postState
    }
}

export default reducer;