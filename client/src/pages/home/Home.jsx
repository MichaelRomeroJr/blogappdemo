import { useEffect, useState } from 'react';

import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import "./home.css";
import axios from "axios";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/posts"); //should point to /post page
        setPosts(res.data)
        // console.log(res.data)

      };
      fetchPosts();
    }, [])
    return(
        <div className='home'>
            <>
                <Header />
                Welcome the blog 
                <div className='home'></div>
                <Posts posts={posts}/>
            </>
        </div>
    )
}