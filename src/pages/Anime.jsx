import React, { useEffect, useState } from 'react'

import Main from '../components/section/Main'
import { Link } from 'react-router-dom'

import VideoCard from '../components/video/VideoCard'
import {AnimeText} from '../data/anime'

const Anime = () => {

  const [loading, setLoading] = useState(true);
  
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      }, 300)
    },[])
  
    const AnimePageClass = loading ? 'isLoading' : 'isLoaded'
  return (
    <Main>
      <section id='AnimePage' className={AnimePageClass}>
        <h2>🎠추천 애니를 소개합니다.</h2>
        <div className='video__inner'>
          <VideoCard videos={AnimeText}/>
        </div>
      </section>
    </Main>
  )
}

export default Anime