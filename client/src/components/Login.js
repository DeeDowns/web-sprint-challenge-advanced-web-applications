import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'


const initialCredentials = {
  username: '',
  password: ''
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState(initialCredentials)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  let history = useHistory()

  const handleChange = event => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  const login = event => {
    event.preventDefault()
    setIsLoading(true)
    axiosWithAuth().post('/api/login', credentials)
      .then(res => {
        console.log(res)
        //saving to localStorage
        localStorage.setItem('token', res.data.payload)
        setIsLoading(false)
        //redirecting to BubblePage
        history.push('/colors')

      })
      .catch(err => {
        console.log(err)
        setIsLoading(false)
        setError(err.message)
      })
  }

  return (
    <form onSubmit={login}>
      <label>Username</label>
      <input
        type='text'
        name='username'
        id='username'
        value={credentials.username}
        onChange={handleChange}
      />

      <label>Password</label>
      <input
        type='text'
        name='password'
        id='password'
        value={credentials.password}
        onChange={handleChange}
      />

      <button>Login</button>
    </form>
  );
};

export default Login;
