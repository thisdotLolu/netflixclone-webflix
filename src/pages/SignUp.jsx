import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './SignUp.css'
import { UserAuth } from '../context/AuthContext'

const SignUp = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const[displayName,setDisplayName]=useState('')
    const {user,signUp,error,setError,pending,setPending}=UserAuth()
    const navigate=useNavigate()


    const handleSubmit=async(e)=>{
        e.preventDefault()
        try{
            setPending(true)
            // await user.updateProfile({displayName:displayName})
            await signUp(email,password)
            navigate('/login')
        }catch(error){
            setError(error)
            console.log(error)
        }
        setPending(false)
        setDisplayName('')
        setEmail('')
        setPassword('')
    }
  return (
    <div className='signup w-full h-screen'>
        <img src='https://www.internationalshowtimes.com/img/International_Showtimes_API_Movie_Guide_Data_Grid.jpg' alt='movie-tape'/>
        <div className='signup-overlay'></div>
        <div className='form-bg'>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                Email
                <input type="email" 
                placeholder='Email' 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                Display Name
                <input type="text" 
                placeholder='Display Name' 
                value={displayName}
                onChange={(e)=>setDisplayName(e.target.value)}
                />
                Password
                <input type='password' placeholder='Password'
                onChange={(e)=>setPassword(e.target.value)}
                />
                {/* {!pending&& <button className='btn'>Sign Up</button>} */}
                {pending?<button className='btn'>Loading</button>:<button className='btn'>Sign Up</button>}
                {error && <p>{error}---error from firebase</p>}
            </form>
            <span className='txt1'><input type="checkbox"/>Remember me</span>
            <span className='txt2'>Need Help?</span>
                <div className='txt3'>
                    Already have an account? <Link style={{color:'gray', textDecoration:'underline'}} to='/login'>Sign In</Link>
                </div>
        </div>
    </div>
  )
}

export default SignUp