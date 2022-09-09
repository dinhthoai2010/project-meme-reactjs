import { ACT_LOGIN_SUCCESS } from "../../constants";

const intState = {
    user: {},
    token: ''
}

function reducer(userState = intState, action) {
    switch (action.type) {
        case ACT_LOGIN_SUCCESS:
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