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


export const headerMenus =[

    {
        title: "홈",
        icon: <CiHome />,
        src: "/"
    },
    {
        title: "추천영상",
        icon: <CiHeart />,
        src: "/today"
    },
    {
        title: "추천음악",
        icon: <CiMusicNote1 />,
        src: "/music"
    },
    {
        title: "추천영화",
        icon: <CiStar />,
        src: "/movie"
    },{
        title: "추천도서",
        icon: <CiBookmark />,
        src: "/book"
    }
    ,{
        title: "추천애니",
        icon: <CiFaceSmile />,
        src: "/anime"
    }
    ,{
        title: "유튜브 사이트",
        icon: <CiYoutube />,
        src: "/youtube"
    }

];

export const searchKeyword =[

    {
        title: "MyYoutobe",
        src: "/search/youtube"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "Javascript",
        src: "/search/javascript"
    },
    {
        title: "React.js",
        src: "/search/react.js"
    },
    {
        title: "JAVA",
        src: "/search/java"
    },
    {
        title: "ORACLE",
        src: "/search/oracle"
    },
    {
        title: "SPRING",
        src: "/search/spring"
    },

];

export const snslink = [

    {
        icon: <BiLogoGithub />,
        src: "https://github.com"
    },
    {
        icon: <BiStar />,
        src: "https://youtube.com"
    },
    {
        icon: <BiLogoGoogle />,
        src: "https://google.com"
    },
    {
        icon: <BiLogoInstagram />,
        src: "https://instagram.com"
    },

];