
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess, postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/Article'
import ArticleService from '../service/Article'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import ArticleForm from './Article-form'

const EditArticle = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailStart())
            try {
                const response = await ArticleService.getArticleDetail(slug)
                setTitle(response.article.title)
                setDescription(response.article.description)
                setBody(response.article.body)
                dispatch(getArticleDetailSuccess(response.article))
            } catch (error) {
                dispatch(getArticleDetailFailure(error.response?.data?.errors || error.message))
            }
        }

        getArticleDetail()

    }, [slug])


    const formSubmit = async e => {
        e.preventDefault()
        const article = { title, description, body }
        dispatch(postArticleStart())
        try {
            const response = await ArticleService.editArticle(slug,article)
            dispatch(postArticleSuccess(response.article))
            navigate('/')
        } catch (error) {
            dispatch(postArticleFailure())

        }
    }
    const formProps = { title, setTitle, description, setDescription, body, setBody, formSubmit }

    return (
        <div className="text-center">
            <h1 className="fs-2 my-3">Edit article</h1>
            <div className="col-12 col-md-10 col-lg-8 mx-auto">
                <ArticleForm  {...formProps} />
            </div>
        </div>)
}

export default EditArticle