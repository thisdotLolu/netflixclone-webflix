import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { useState } from 'react'



const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {user,logIn,error,setError,pending,setPending}=UserAuth()
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            // await user.updateProfile({displayName:displayName})
            await logIn(email,password)
            navigate('/')
        }catch(error){
            setError(error)
            console.log(error)
        }
        setPending(false)
    }
  return (
    <div className='signup w-full h-screen'>
    <img src='https://www.internationalshowtimes.com/img/International_Showtimes_API_Movie_Guide_Data_Grid.jpg' alt='movie-tape'/>
    <div className='signup-overlay'></div>
    <div className='form-bg'>
        <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type="email" 
            placeholder='Email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input 
            type='password' 
            placeholder='Password' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            {pending?<button className='btn'>Loading</button>:<button className='btn'>Log In</button>}
            {error && <p>{error}</p>}
        </form>
        <span className='txt1'><input type="checkbox"/>Remember me</span>
        <span className='txt2'>Need Help?</span>
            <div className='txt3'>
                Don't have an account? <Link style={{color:'gray', textDecoration:'underline'}} to='/signup'>Sign Up</Link>
            </div>
    </div>
</div>
  )
}

export default Login