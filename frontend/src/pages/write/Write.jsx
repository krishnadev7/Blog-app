import './write.css';

import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/Context';
import axios from 'axios';

function Write() {
  const { user } = useContext(UserContext);
console.log(user.username);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [file, setFile] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename =  Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.photo = filename;

      try {
        await axios.post('upload', data);
      } catch (error) {
        console.log(error);
      }
    }
    
    try {
      const res = await axios.post('post', newPost);
      window.location.replace(`post/${res.data._id}`);
    } catch (error) {
      console.log(error);
      console.log('axios error');
    }
  };

  return (
    <div className='write'>
      {file && (
        <img src={URL.createObjectURL(file)} alt='' className='writeImg' />
      )}
      <div className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fa-solid fa-images'></i>
          </label>
          <input
            type='file'
            id='fileInput'
            style={{ display: 'none' }}
            onChange={e => setFile(e.target.files[0])}
          />
          <input
            type='text'
            placeholder='Title'
            className='writeInput'
            autoFocus={true}
            onChange={(e)=>{setTitle(e.target.value)}}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Write your blog'
            type='text'
            className='writeInput writeText'
            onChange={(e)=>{setDesc(e.target.value)}}
          ></textarea>
        </div>
        <button className='writeSubmit' onClick={handleSubmit}>
          Publish
        </button>
      </div>
    </div>
  );
}

export default Write;
