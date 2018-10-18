import {applyMiddleware, createStore, compose} from "redux";
import thunk from "redux-thunk";

import {reqResReducer} from "./reducers/reqresreducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const create_store = ()=>{

    const initState = {
        userData: [],
        userPage: 1,
        moreUsers:true
    };

    return createStore(
        reqResReducer,
        initState,
        composeEnhancers(applyMiddleware(thunk))
    );

}