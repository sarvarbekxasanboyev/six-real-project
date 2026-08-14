import { useEffect, useState } from "react";
import { icon } from "../constants";
import { Input } from '../ui'
import { useDispatch, useSelector } from "react-redux";
import { signUserStart, signUserSuccess, signUserFailure } from "../slice/Auth";
import AuthService from "../service/Auth";
import {ValidationError } from "./";  
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const { isLoading, loggedIn } = useSelector(state => state.auth)
  const navigate = useNavigate()

  const registerHandler = async e => { 
    e.preventDefault()
    dispatch(signUserStart())
    const user = {username: name, email, password}

    try {
      const response = await AuthService.userRegister(user)
      dispatch(signUserSuccess(response.user))
      navigate('/')
    } catch (error) {
      console.log(error.response.data);
      
      dispatch(signUserFailure(error.response.data.errors))
    }
  }

  useEffect (() => {
    if(loggedIn) {
      navigate('/')
    }
  }, [loggedIn])

  return (
    <div className="text-center mt-3">
      <main className="form-signin col-11 col-sm-8 col-md-6 col-lg-4 mx-auto">
        <form onSubmit={registerHandler}>
          <img
            className="mb-2"
            src={icon}
            alt=""
            width="50"
            height="50"
          />
          <h1 className="h3 mb-3 fw-normal">Please Register</h1>
          <ValidationError/>
          <Input label={'Username'} state={name} setState={setName}/>
          <Input label={'Email address'} type={"email"} state={email} setState={setEmail}/>
          <Input label={'Password'} type={"password"} state={password} setState={setPassword}/>

          <button className="btn btn-primary w-100 py-2 mt-2" type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Register '}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;