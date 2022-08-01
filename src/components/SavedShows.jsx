import React from 'react'
import './SavedShow.css'
import { useState,useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'
import { db } from '../firebase/firebase'
import { setDoc,doc,onSnapshot } from 'firebase/firestore'
import { FaTrash } from 'react-icons/fa'

const SavedShows = () => {
    const[movies,setMovies]=useState([])
    const {user}= UserAuth()

    useEffect(()=>{
        onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{
            setMovies(doc.data()?.savedShows)
        })
    },[user?.email])

    const movieRef= doc(db, 'users', `${user?.email}`)
    const deleteShow=async(id)=>{
        try{
            const result=movies.filter(item=>{
                return item.id !== id
            })
            await setDoc(movieRef,{
                savedShows:result
            })
        }catch(error){
            console.log(error)
        }
    }
  return (
    <>
    <div className='row'>
       <h2 className='text-black font-bold md:text-xl p-4'>Find your Saved Movies Below</h2>
           <div className='container'>
           {movies?.map((item,id)=>{
                return(
                    <div key={id}>
                        <div className='inner-cont'>
                        <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`} 
                        alt={item?.title}
                        />
                        <FaTrash
                        onClick={()=>deleteShow(item.id)}
                        className='trash'/>
                        <p>{item?.title}</p>
                        </div>
                    </div>
                )
            })}
           </div>
    <hr />
    </div>
    </>
  )
}

export default SavedShows