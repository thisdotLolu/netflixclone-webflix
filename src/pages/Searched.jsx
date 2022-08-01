import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Searched.css'

const Searched = () => {
    const[searched,setSearched]=useState([])
    const params=useParams()

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=e228becc0196b906b4733a8203a57a9f&query='+ params.search)
        .then((res)=>{
            setSearched(res.data.results);
        })
    },[params.search])
    console.log(searched)
  return (
    <div className='search-container'>
        <div className='search-overlay'></div>
        {
            searched.map((each)=>{
                return(
                    <div className='search-item' key={each.id}>
                       <Link to='/redirect'>{each.backdrop_path!==null?(<img src={`https://image.tmdb.org/t/p/w500/${each.backdrop_path}`} alt={each.title}/>):(<img src='https://t4.ftcdn.net/jpg/02/35/35/39/360_F_235353964_YeB3rvwbqZ31dJGWEgxK86KUD6eIC9Eb.jpg'/>)}</Link>             
                        <p>{each.title}</p>
                        <p>Rating {each.vote_average}</p>
                        <p>{each.release_date}</p>
                        <hr />
                    </div>
                )
            })
        }
         
    </div>
  )
}

export default Searched