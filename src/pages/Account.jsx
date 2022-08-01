import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full  text-white'>
        <img style={{objectFit:'cover',height:'400px',width:'100vw'}} src="https://www.internationalshowtimes.com/img/International_Showtimes_API_Movie_Guide_Data_Grid.jpg" alt="movie_grid"/>
        <div style={{height:'360px',width:'100vw'}} className='signup-overlay'></div>
        <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className='text-3xl md:text-5xl font-bold'>Saved Movies</h1>
        </div>
    </div>
    <SavedShows className='savedShow'/>
    </>
  )
}

export default Account