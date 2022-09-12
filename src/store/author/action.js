import { ACCESS_TOKEN, ACT_LOGIN_SUCCESS } from "../../constants";
import { mappingUser } from "../../helpers";
import { authorService } from "../../services/author"

export function asyLogin(params) {
    return async (dispatch) => {
        try {
            const response = await authorService.login(params);
            const token = response.data.token;
            dispatch(reducerLogin(response.data.user, token))
            return {
                ok: response.data.status,
                user: response.data.user
            }
        } catch (error) {
            return {
                ok: false,
                error: "username hoac pass khong dung"
            }
        }
    }
}


export function asyFetchMe() {
    return async dispatch => {

        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token === '') return null;
        try {
            const res = await authorService.fetchMe(token)
            let user = res.data.user;
            if (user.id) {
                user = await authorService.getUser(user.id);
                user = mappingUser(user.data.user) 
            }
            dispatch(reducerLogin(user, token))
        } catch (error) {
            console.log(error)
        }
    }
}

function reducerLogin(user, token) {
    return {
        type: ACT_LOGIN_SUCCESS,
        payload: {
            user,
            token
        }
    }
}