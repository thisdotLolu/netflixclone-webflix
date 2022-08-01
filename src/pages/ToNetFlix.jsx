import React from 'react'
import { Link } from 'react-router-dom'

const ToNetFlix = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',width:'100vw'}}>
        <h1
        >Stream this movie at <a style={{textDecoration:'underline'}} href='https://www.netflix.com/ng/'>This Link</a></h1>
    </div>
  )
}

export default ToNetFlix