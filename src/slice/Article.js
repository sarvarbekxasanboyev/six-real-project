import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    articles: [],
    articleDetail: null,
    error: null,
}

export const ArticleSlice = createSlice ({
    name: 'article',                
    initialState,
    reducers: {
        getArticleStart: state => {
            state.isLoading = true
        },
        getArticleSuccess: (state, action) => {
            state.isLoading = false
            state.articles = action.payload
        },
        getArticleFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        getArticleDetailStart: state => {
            state.isLoading = true
        },
        getArticleDetailSuccess: (state, action) => {
            state.isLoading = false
            state.articleDetail = action.payload
        },
        getArticleDetailFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        postArticleStart: state => {
            state.isLoading = true
        },
        postArticleSuccess: state => {
            state.isLoading = false
        },
        postArticleFailure: state => {
            state.isLoading = false
            state.error = "Error"
        },
    },  
})

export const {getArticleSuccess, getArticleStart, getArticleFailure, getArticleDetailFailure, getArticleDetailSuccess, getArticleDetailStart, postArticleFailure, postArticleStart, postArticleSuccess} = ArticleSlice.actions
export default ArticleSlice.reducer 