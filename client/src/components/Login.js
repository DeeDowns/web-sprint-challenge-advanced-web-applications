import React, { useState } from "react";
import { useHistory } from 'react-router-dom'


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
      [event.target.name]: event.target.value
    })
  }

  return (
    <form>
      <label>Username</label>
      <input
        type='text'
        name='username'
        id='username'
        // value={}
        onChange={handleChange}
      />

      <label>Password</label>
      <input
        type='password'
        name='password'
        id='password'
        // value={}
        onChange={handleChange}
      />

      <button>Login</button>
    </form>
  );
};

export default Login;
