import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Search.css'


const Search = () => {
    const[searchTerm,setSearchTerm]=useState('');
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate('/searched/'+searchTerm)
        setSearchTerm('')
    }


  return (
    <div>
        <form  onSubmit={handleSubmit}>
            <input 
            className='searchbar-search'
            style={{border:'1px solid',height:'30px'}}
            type="text" 
            placeholder='Search'
            onChange={(e)=>setSearchTerm(e.target.value)}
            value={searchTerm}
            />
        </form>
    </div>
  )
}

export default Search