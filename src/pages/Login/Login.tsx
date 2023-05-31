import React, { ChangeEvent, FormEvent, useState } from 'react'
import "./styles/Login.scss"

interface UserInput {
    email?: String,
    password?: String
}

const Login = () => {
    const [userInput, setUserInput] = useState<UserInput>({})

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserInput((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(userInput)
    }

  return (
    <div className='login'>
        <div className="login__container">
            <h1 className="login__title">Login</h1>
            <form onSubmit={handleSubmit} className="login__form">
                <input onChange={handleChange} type="email" className="login__input" placeholder='Email Address' name='email' required/>
                <input onChange={handleChange} type="password" className="login__input" placeholder='Password' name='password' required/>
                <button disabled={userInput.email === "" || userInput.password === ""} className="login__button" type='submit' role='button'>LOGIN</button>
            </form>
        </div>
    </div>
  )
}

export default Login