import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import postReducer from './post/reducer'
import userReducer from './author/reducer'

const rootReduce = combineReducers({
    Post: postReducer,
    User: userReducer
})

const store = createStore(rootReduce, applyMiddleware(thunk, logger))

export default store