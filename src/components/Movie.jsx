import React from 'react'
import {BiAddToQueue} from 'react-icons/bi'
import {MdLibraryAddCheck} from 'react-icons/md'
import { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase/firebase';
import {arrayUnion, doc, updateDoc} from 'firebase/firestore';
import { Link } from 'react-router-dom'




const Movie = ({item,id}) => {
    const[like,setLike]=useState(false)
    const[saved,setSaved]=useState(false)
    const{user}=UserAuth()

    const movieID= doc(db,'users',`${user?.email}`)

    const saveShow=async()=>{
      if(user?.email){
        setLike(!like)
        setSaved(true)
        await updateDoc(movieID,{
          savedShows:arrayUnion(
            {
              id:item.id,
              title:item.title,
              img:item.backdrop_path
            }
          )
        })
      }else{
        alert('Please Login to save a movie')
      }
    }
  return (
    <>
    <div className='one-movie w-[160px] sm:w-[200px] md:w-[240px] lg:w-[200px] inline-block cursor-pointer relative p-2' >
              <Link to='/redirect'><img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}
                /></Link>  
                <div className='save'>
                    <p onClick={saveShow}>
                        {!like? <BiAddToQueue className='absolute top-4 left-4 text-gray-300'/>:<MdLibraryAddCheck className='absolute top-4 left-4 text-gray-300'/>}
                    </p>
                </div>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title.length>10?`${item?.title.substring(0,15)}...`:item?.title}</p>
        </div>      
    </>
  )
}

export default Movie