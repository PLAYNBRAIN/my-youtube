import React from 'react'
import { Link } from 'react-router-dom'

const VideoCard = ({videos}) => {
  return (
    <>
      {videos.map((videos,key)=>(
        <div className='video' key={key}>
          <div className='video__thumb play__icon'>
            <Link to={`video/${videos.videoId}`}>
            <img src={videos.img} alt={videos.title} />
            </Link>
          </div>
        </div>

      ))}


    
    </>

  )
}

export default VideoCard