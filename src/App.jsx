
import { Routes, Route } from "react-router-dom"
import { Main, Login, Register, Navbar, ArticleDetail, CreateArticle, EditArticle } from "./components/index"
import AuthService from "./service/Auth"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { signUserSuccess } from "./slice/Auth"
import { getItem } from "./components/helpers/Persistance-storage"
import ArticleService from "./service/Article"
import { getArticleStart, getArticleSuccess, getArticleFailure } from "./slice/Article"

const App = () => {

  const dispatch = useDispatch()

  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    const token = getItem('token')
    if (token) {
      getUser()
    }
  }, [])

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article/:slug" element={< ArticleDetail />} />
        <Route path="/create-article/" element={< CreateArticle />} />
        <Route path="/edit-article/:slug" element={< EditArticle />} />

      </Routes>
    </div>
  )
}

export default App