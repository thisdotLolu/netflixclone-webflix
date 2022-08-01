import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'
import { UserAuth } from '../context/AuthContext'
import Footer from '../components/Footer'


const Home = () => {
  const{pending,error,setPending,setError}=UserAuth()
  return (
    <>
     {pending && <p>Loading...</p>}
     <Main/>
    <Row rowid='1' title='Our Top Picks For You' fetchURL={requests.requestUpcoming}/>
    <Row rowid='2' title='Popular' fetchURL={requests.requestPopular}/>
    <Row rowid='3' title='Randoms' fetchURL={requests.requestTrending}/>
    <Row rowid='4' title='Adventure/Animation' fetchURL={requests.requestTopRated}/>
    <Row rowid='5' title='Horror' fetchURL={requests.requestHorror}/>
    <Footer/>
    </>
  )
}

export default Home