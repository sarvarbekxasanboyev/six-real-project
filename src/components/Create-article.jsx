import ArticleService from "../service/Article"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { postArticleFailure, postArticleStart, postArticleSuccess } from "../slice/Article"
import { useNavigate } from "react-router-dom"
import ArticleForm from "./Article-form"
const CreateArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const formSubmit = async e => {
        e.preventDefault()
        const article = { title, description, body }
        dispatch(postArticleStart())
        try {
            const response = await ArticleService.postArticle(article)
            dispatch(postArticleSuccess(response.article))
            navigate('/')
        } catch (error) {
            dispatch(postArticleFailure())

        }
    }

    const formProps = { title, setTitle, description, setDescription, body, setBody, formSubmit }
    return (
        <div className="text-center">
            <h1 className="fs-2 my-3">Create article</h1>
            <div className="col-12 col-md-10 col-lg-8 mx-auto">
                <ArticleForm  {...formProps} />
            </div>
        </div>
    )
}

export default CreateArticle
