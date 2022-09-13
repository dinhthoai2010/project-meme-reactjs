import { ACCESS_TOKEN, ACT_LOGIN_SUCCESS } from "../../constants";

const intState = {
    user: null,
    token: ''
}

function reducer(userState = intState, action) {
    switch (action.type) {
        case ACT_LOGIN_SUCCESS:
            localStorage.setItem(ACCESS_TOKEN,action.payload.token)
            return {
                ...userState,
                user:action.payload.user,
                token:action.payload.token,
            }
        default:
            return userState
    }
}

export default reducer;