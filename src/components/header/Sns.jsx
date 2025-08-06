import React from 'react'
import { snslink } from '../../data/header'

const Sns = () => {
  return (
    <div className='header_sns'>
        <ul>
          {
            snslink.map((sns,key)=>(
              <li key={key} >
                <a href={sns.src} target='blank'>
                  <span>{sns.icon}</span>
                </a>
              </li>
            ))
          }
          
        </ul>
      </div>
  )
}

export default Sns