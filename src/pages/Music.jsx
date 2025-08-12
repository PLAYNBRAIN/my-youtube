import React, { use, useEffect, useState } from 'react'
import Main from '../components/section/Main'
import { Link } from 'react-router-dom'
import { musicText } from '../data/music'

const Music = () => {

  const [loading, setLoading] = useState(true);
  
    useEffect(()=>{
      setTimeout(()=>{
        setLoading(false);
      }, 300)
    },[])

    const musicPageClass = loading ? 'isLoading' : 'isLoaded'
  
  return (
    <Main>
      <section id='musicPage' className={musicPageClass}>
        <h2>🎸추천 음악을 소개합니다.</h2>
        <div className='music__inner'>
          {musicText.map((music, key) => (
            <div className='music' key={key}>
              <div className='music__img play__icon'>
                <Link to={`/channel/${music.channelId}`}>
                  <img src={music.img} alt={music.name}/>
                </Link>
              </div>
              <div className='music__info'>
                <Link to={`/channel/${music.channelId}`}>
                  {music.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Main>
  )
}

export default Music