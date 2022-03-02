import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../Firebase'

const Login = () => {
    let navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signIn = (e) => {
        e.preventDefault()
       
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
                    console.log(auth)
                    navigate('/')
                })
        .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault()
        
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => { 
                        if(auth){
                        navigate('/')
                    }
                })
        .catch(error => alert(error.message))
    }

return (
        <div className="login">
           <Link to="/" >
                <img 
                    className="login__logo"
                    src= "http://pngimg.com/uploads/amazon/amazon_PNG12.png" 
                    alt=""
                    />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form action="">
                    <h5>Email</h5>
                    <input  type="text"
                            value={email} 
                            onChange={e => setEmail(e.target.value)} 
                            />
                    <h5>Password</h5>
                    <input  type="password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)} 
                            />
                    <button className='login__signInButton'
                            type='submit'
                            onClick={signIn}
                            >
                            Sign In
                    </button>

                </form>

                <p>
                    By signing-in you agree to the Amazon Mock Site Conditions of Use and Sale.
                    Please see our (not available) Privacy Notice, our Cookies (Not yet implemented on this site) Notice,
                    and our Interests-Based Ads Notice (We have none, we hate advertising as do you).    
                </p>

                <button className='login__registerButton'
                        onClick={register}
                        >
                        Create your Amazon Account
                </button>

            </div>
        </div>
    )
}

export default Login

