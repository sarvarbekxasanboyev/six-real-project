import { Link, useNavigate } from 'react-router-dom'
import { logo } from "../constants"
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from './helpers/Persistance-storage'
import { logoutUser } from '../slice/Auth'

const Navbar = () => {
    const { loggedIn, user } = useSelector(state => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandlar = () => {
        dispatch(logoutUser())
        removeItem('token')
        navigate('/Login')
    }
    return (

        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom pt-1 position-sticky top-0 bg-white z-3">
            <Link to={'/'}>
                <img className='mt-2' src={logo} width={'50px'} alt="" />
            </Link>

            <nav className="d-inline-flex flex-wrap align-items-center justify-content-center mt-2 mt-md-0 ms-md-auto gap-2">
                {loggedIn ? (
                    <>
                        <p className="me-2 py-2 m-0 text-dark link-body-emphasis text-decoration-none fw-semibold">{user.username}</p>
                        <Link className='me-2 py-2 text-dark link-body-emphasis text-decoration-none' to={'/create-article'}>
                            create article
                        </Link>
                        <button className='btn btn-outline-danger m-0' onClick={logoutHandlar}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link className='me-3 py-2 text-dark link-body-emphasis text-decoration-none' to={'/login'}>
                            Login
                        </Link>
                        <Link className='me-3 py-2 text-dark link-body-emphasis text-decoration-none' to={'/register'}>
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </div>
    )
}

export default Navbar