import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../ui";
import { useEffect } from "react";
import ArticleService from "../service/Article";
import { getArticleFailure, getArticleStart, getArticleSuccess } from "../slice/Article";
import CardArticle from "./Card-article";
const Main = () => {
  const { articles, isLoading } = useSelector(state => state.article)
  const dispatch = useDispatch()

  const getArticles = async () => {
    dispatch(getArticleStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(getArticleSuccess(response.articles))
    } catch (error) {
      console.log(error);
      dispatch(getArticleFailure(error.response?.data?.errors || error.message))
    }
  }


  useEffect(() => {
    getArticles()
  }, [])
  return (
    <div className="album py-5">
      <div className="container">
        {isLoading && <Loader />}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {articles && articles.map(item => (
            <CardArticle item={item} getArticles={getArticles}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main;