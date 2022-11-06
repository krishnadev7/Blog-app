import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './singlePost.css';
import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/Context';

function SinglePost() {
  const location = useLocation();
  const { user } = useContext(UserContext);
  const path = location.pathname.split('/')[2];
  const [post, setPost] = useState({});
  const PF = 'http://localhost:5000/images/';

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`/post/${path}`);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  const handleDelete = async e => {
    e.preventDefault();
    try {
      await axios.delete(`/post/${path}`, {
        data: { username: user.username },
      });
      window.location.replace('/');
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async(e) => {
    try {
      await axios.put(`/post/${path}`,{username: user.username, title,desc})
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        {post.photo && (
          <img
            src={PF + post.photo}
            alt=''
            className='singlePostImg'
            autoFocus
          />
        )}

        {updateMode ? (
          <input
            type='text'
            value={title}
            onChange={e => setTitle(e.target.value)}
            className='singlePostTitleInput'
          />
        ) : (
          <h1 className='singlePostTitle'>
            {console.log(post.username === user?.username)}
            {title}
            {post.username === user?.username && (
              <div className='singlePostEdit'>
                <i
                  className='singlePostIcon fa-solid fa-pen-to-square'
                  style={{ color: 'LightGreen' }}
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i
                  className='singlePostIcon fa-solid fa-trash'
                  style={{ color: 'red' }}
                  onClick={handleDelete}
                ></i>
              </div>
            )}
          </h1>
        )}
        <div className='singlePostInfo'>
          <span className='sinlgePostAutor'>
            Author:
            <Link to={`/?user=${post.username}`} className='link'>
              <b> {post.username}</b>
            </Link>
          </span>
          <span className='singlePostDate'>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className='singlePostDesc'
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
        ) : (
          <p className='singlePostDesc'>{desc}</p>
        )}
        {updateMode && (
          <button className='singlePostButton' onClick={handleSubmit}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
