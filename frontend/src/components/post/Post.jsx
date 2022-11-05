import React from 'react';
import './post.css'
import {Link} from 'react-router-dom'

function Post({ post }) {
  return (
    <div class='post'>
      {post.photo && <img src={post.photo} alt='' className='postImg' />}

      <div className='postInfo'>
        <div className='postCats'>
          {post.categories.map(catergory => (
            <Link to={`/?`}>
              <span className='postCat'>{catergory.name}</span>
            </Link>
          ))}
        </div>
        <Link to={`post/${post._id}`} className='link'>
          <span className='postTitle'>{post.title}</span>
        </Link>
        <hr />
        <span className='postDate'>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className='postDesc'>{post.desc}</p>
    </div>
  );
}

export default Post;
