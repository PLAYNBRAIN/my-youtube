import React from 'react'


import { Link } from 'react-router-dom'
import { AnimeText } from '../../data/anime'

const Anime = () => {
  return (
      <section id='anime'>
        <h2>🎠추천 애니를 소개합니다.</h2>
        <div className='anime__inner overflow'>
          {AnimeText.map((anime, key) => (
            <div className='anime' key={key}>
              <div className='anime__img play__icon'>
                <Link to={'/channel/${anime.channelId}'}>
                  <img src={anime.img} alt={anime.name}/>
                </Link>
              </div>
              <div className='anime__info'>
                <Link to={'/channel/${anime.channelId}'}>
                  {anime.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}


export default Anime