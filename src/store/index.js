import {configureStore} from "@reduxjs/toolkit";    //configureStore is a toolkit of redux library
import authReducer from "./auth";
import playerReducer from "./player"

const store=configureStore({
    reducer:{
        auth:authReducer,
        player:playerReducer
    },
});

export default store;