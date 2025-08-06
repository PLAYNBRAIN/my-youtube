import React from 'react'

import { CiHome } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiMusicNote1 } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { BiLogoGithub } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { BiLogoGoogle } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";



const Header = () => {
  return (
    <header id='header' role='banner'>
      <h1 className='header_logo'>
        <a href='/'>
          <em aria-hidden='true'></em>
          <span>my<br/>youtube</span>
        </a>
      </h1>
      <nav className='header_menu'>
        <ul className='menu'>
          <li className='active'>
            <a href='/'><CiHome />홈</a>
          </li>
          <li>
            <a href='/today'><CiHeart />추천 영상</a>
          </li>
          <li>
            <a href='/music'><CiMusicNote1 />추천 음악</a>
          </li>
          <li>
            <a href='/movie'><CiStar />추천 영화</a>
          </li>
          <li>
            <a href='/book'><CiBookmark />추천 도서</a>
          </li>
          <li>
            <a href='/anime'><CiFaceSmile />추천 애니</a>
          </li>
          <li>
            <a href='/youtube'><CiYoutube />유튜브 사이트</a>
          </li>
        </ul>
        <ul className='keyword'>
          <li>
            <a href="/search/youtube">MyYoutobe</a>
          </li>
          <li>
            <a href="/search/html">HTML</a>
          </li>
          <li>
            <a href="/search/css">CSS</a>
          </li>
          <li>
            <a href="/search/javascript">Javascript</a>
          </li>
          <li>
            <a href="/search/react.js">React.js</a>
          </li>
          <li>
            <a href="/search/java">JAVA</a>
          </li>
          <li>
            <a href="/search/oracle">ORACLE</a>
          </li>
          <li>
            <a href="/search/spring">SPRING</a>
          </li>
        </ul>
      </nav>
      <div className='header_sns'>
        <ul>
          <li>
            <a href="https://github.com"><BiLogoGithub /></a>
          </li>
          <li>
            <a href="https://youtube.com"><BiStar /></a>
          </li>
          <li>
            <a href="https://google.com"><BiLogoGoogle /></a>
          </li>
          <li>
            <a href="https://instagram.com"><BiLogoInstagram /></a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header