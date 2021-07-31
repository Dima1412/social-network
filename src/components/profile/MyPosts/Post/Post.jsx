import React from 'react';
import s from './Post.module.css';


const Post = (Props) => {
  return (
    <div className={s.item}>
      <img src='https://image.freepik.com/free-vector/hand-drawn-fuck-you-symbol_23-2148674548.jpg' />
      {Props.message}
      <div>
        <span>like {Props.likesCount}</span>
      </div>
    </div>
  )
};

export default Post;
