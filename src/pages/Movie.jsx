import React, { use, useEffect, useState } from 'react'

import Main from '../components/section/Main'
import { Link } from 'react-router-dom'

import VideoCard from '../components/video/VideoCard'

import { movieText } from '../data/movie'

const Movie = () => {

  const [loading, setLoading] = useState(true);
  
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      }, 300)
    },[])
  
    const moviePageClss = loading ? 'isLoading' : 'isLoaded'

  return (
    <Main>
      <section id='moviePage' className={moviePageClss}>
        <h2>🍿추천 영화 페이지입니다.</h2>
        <div className='video__inner'>
          <VideoCard videos={movieText}/>
        </div>
      </section>
    </Main>
  )
}

export default Movie