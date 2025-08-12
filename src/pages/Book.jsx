import React, { use, useEffect, useState } from 'react'

import Main from '../components/section/Main'
import { Link } from 'react-router-dom'

import VideoCard from '../components/video/VideoCard'
import { BookText } from '../data/book'

const Book = () => {

  const [loading, setLoading] = useState(true);
  
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      }, 300)
    },[])
  
    const BookPageClass = loading ? 'isLoading' : 'isLoaded'
  
  return (
    <Main>
      <section id='BookPage' className={BookPageClass}>
        <h2>📚추천 도서를 소개합니다.</h2>
        <div className='video__inner'>
          <VideoCard videos={BookText}/>
        </div>
      </section>
    </Main>
  )
}

export default Book