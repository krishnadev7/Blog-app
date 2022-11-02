import React from 'react';
import './singlePost.css';

function SinglePost() {
  return (
    <div className='singlePost'>
      <div className='singlePostWrapper'>
        <img
          src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
          alt=''
          className='singlePostImg'
        />
        <h1 className='singlePostTitle'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className='singlePostEdit'>
            <i className='singlePostIcon fa-solid fa-pen-to-square' style={{color: 'LightGreen'}}></i>
            <i className='singlePostIcon fa-solid fa-trash' style={{color: 'red'}}></i>
          </div>
        </h1>
        <div className='singlePostInfo'>
          <span className='sinlgePostAutor'>
            Author:<b> Krishandev</b>
          </span>
          <span className='singlePostDate'>1 hour ago</span>
        </div>
          <p className='singlePostDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            nesciunt, magni illum molestias eos impedit doloribus nobis
            laboriosam blanditiis repellat voluptatum sint facere nostrum, quae
            ab corrupti modi a architecto atque temporibus dolorum magnam
            maiores rem quasi? Temporibus vitae voluptas cumque dolorem aliquam?
            Veniam quaerat doloribus placeat. Soluta culpa omnis odit neque
            tempora animi doloribus repudiandae quis magnam sed iusto natus
            praesentium distinctio, quas aliquid temporibus ex maxime quod
            possimus nemo sint ratione autem consequatur nihil? Deleniti
            voluptatum consectetur voluptate iure repellendus doloribus iste
            rerum eveniet ea earum enim veritatis, odit cupiditate neque
            accusamus debitis cumque eaque. Perspiciatis libero placeat incidunt
            ratione enim asperiores, rem omnis? Excepturi corporis aliquid
            veniam aperiam vero, recusandae eum repellat sequi deserunt,
            mollitia, quo nulla non eveniet reprehenderit delectus expedita
            rerum et soluta suscipit ut omnis tenetur ex praesentium. Ea libero
            numquam dolores, temporibus quas odit, nihil nesciunt unde at
            commodi dolore aperiam quasi maiores asperiores ducimus fuga
            voluptas nostrum quaerat repudiandae animi inventore praesentium
            ipsa dolor suscipit. Cum omnis magnam, natus tempora enim placeat
            vel, saepe est consequuntur nemo quaerat fugit recusandae neque
            earum perspiciatis ducimus magni veritatis eligendi. Necessitatibus
            sunt, rem est eaque minima autem, illum reprehenderit eos, soluta
            pariatur eius consequatur nisi.
          </p>
      </div>
    </div>
  );
}

export default SinglePost;
