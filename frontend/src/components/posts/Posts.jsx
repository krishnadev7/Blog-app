import React from 'react'
import Post from '../post/Post'
import './posts.css'

function Posts({posts}) {
  return (
    <div className='posts'>
      {posts && posts.map((post,i) => (
        <Post post={post} key={i}/>
      ))}
    </div>
  )
}

export default Posts