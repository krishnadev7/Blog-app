import React, { useEffect } from 'react'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import './home.css'
import { Fragment } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

function Home() {
  const [posts,setPosts] = useState([]);
  const {search} = useLocation();
  useEffect(() => {
     const fetchPosts = async() => {
          const res = await axios.get(`post/${search}`)
          setPosts(res.data)
        }
     fetchPosts();
  }, [search])
  
  return (
    <Fragment>
        <Header />
      <div className='home'>
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </Fragment>
  );
}

export default Home