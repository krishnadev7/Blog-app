import React from 'react'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import './home.css'
import { Fragment } from 'react'

function Home() {
  return (
    <Fragment>
        <Header />
      <div className='home'>
        <Posts />
        <Sidebar />
      </div>
    </Fragment>
  );
}

export default Home