import React from 'react'
import {BiCameraMovie} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { FaSave, FaUser } from 'react-icons/fa'
import Search from './Search';
import {useState} from 'react'
import {FaTimes,FaBars} from 'react-icons/fa'
import './Navbar.css'


const Navbar = () => {
  const[click,setClick]=useState()
  const{user,logOut}=UserAuth();
  const navigate=useNavigate()
  

  const handleClick=()=>setClick(!click)

  const handleLogOut=async()=>{
    try{
      await logOut()
      navigate('/signup')
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div className='navbar flex items-center justify-between p-4 z-[100] w-full absolute'>
       <Link to='/'><h1 className='text-black-600 text-4xl font-bold cursor-pointer'><BiCameraMovie size={50}/></h1></Link>         
        {user? (
        <div className='nav-user'>
        <Search/>
        <div className='btn-out' style={{display:'flex',alignItems:'center'}}>
        <p style={{marginLeft:'12px',marginRight:'2px'}}>Saved Movies</p>
        <Link to='/account'><FaSave style={{marginRight:'15px',marginLeft:'10px'}}/></Link>
        <button className='btn' onClick={handleLogOut}>Logout</button>
        </div>
        </div>
         ):
        (
        <div>
        <div className={click?'btn-nav active':'btn-nav'}>
          <Link to='/login'><button className='btn-in text-black pr-4'>Sign In</button></Link>
          <Link to='/signup'><button style={{backgroundColor:'#3B444B'}}className='btn-up px-6 py-2 rounded cursor-pointer text-white'>Sign Up</button></Link>
        </div>
        <div 
        className='hamburger'
        onClick={handleClick}
        >
        {click ? (<FaTimes size={20} style={{color:'black'}}/>):(<FaBars size={20} style={{color:'black'}}/>)}
        </div>
        </div>
        )
        }
    </div>
  )
}

export default Navbar