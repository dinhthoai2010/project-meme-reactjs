import { ACCESS_TOKEN, ACT_LOGIN_SUCCESS } from "../../constants";
import { mappingUser, setToken } from "../../helpers";
import { authorService } from "../../services/author"
import { reducerGetPostByUser } from "../post/actions";

export function asyLogin(params) {
    return async (dispatch) => {
        try {
            const response = await authorService.login(params);
            const token = response.data.token;
            if (token ===undefined) {
                return {
                    ok: response.data.status,
                    error: response.data.error
                }
            }
            else {
                dispatch(reducerLogin(response.data.user, token))
                return {
                    ok: response.data.status,
                    user: response.data.user
                }
                
            }

        } catch (error) {
            return {
                ok: 400,
                error: "username hoac pass khong dung"
            }
        }
    }
}

export function asyFetchMe() {
    return async dispatch => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token === '' || token===undefined) return null;
        if (typeof (token) === "undefined") {
            setToken()
            return {}
        }
        try {
            const res = await authorService.fetchMe(token)
            let user = res.data.user;
            if (user?.id) {
                user = await authorService.getUser(user?.id);
                user = mappingUser(user.data.user)
            }
            dispatch(reducerLogin(user, token))
            return user
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

export const asyUpdateUser = (formData) => {
    return async dispatch => {
        try {
            const res = await authorService.updateUser(formData)
            return res.data
        } catch (error) {
            return error
        }
    }
}

export const asyHandleLogout = () => {
    return async dispatch => {
        try {
            dispatch(reducerLogin({}, ''));
            setToken()
            return {
                status: 200,
                message: "ok"
            }
        } catch (error) {
            return error
        }
    }
}

export const asyRegister = (data) => {
    return async dispatch => {
        try {
            const res = await authorService.register(data)
            const user = mappingUser(res.data.user)
            dispatch(reducerLogin(user, res.data.token))
            dispatch(reducerGetPostByUser([]))
            return {
                status: 200,
                user
            }
        } catch (error) {
            return error
        }
    }
}

export const asyChangePassword = (data) => {
    return async dispatch => {
        try {
            const res = await authorService.changePass(data)
            return res.data
        } catch (error) {
            return error
        }
    }
}