import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slice/Auth"
import ArticleReducer from "../slice/Article";

export default configureStore ({
    reducer: {
        auth: AuthReducer,
        article: ArticleReducer,
    },
    devTools: import.meta.env.MODE !== 'production',
})