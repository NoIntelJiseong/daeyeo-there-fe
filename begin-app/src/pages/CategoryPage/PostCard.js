// PostCard.js
import React from 'react';
import './PostCard.css'; // CSS 파일을 import하여 스타일링

const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);



const getImagePath = (imageName) => {
  return images(`./${imageName}`);
};

const PostCard = ({ post }) => {
  const { image, nickname, title, price, tag, link } = post; // tag를 하나만 받도록 설정
  const profimg = getImagePath('프로필_채색.png');
  return (
    <div className="post-card">
      {/* 이미지와 링크 */}
      <a href={link} className="post-image-link">
        <div className="post-image-wrapper">
          <img src={image} alt={title} className="post-image" />
        </div>
      </a>
      {/* 게시글 정보 */}
      <div className="post-info">
        <div className="post-nickname">
          <span className="profile-dot"><img src={profimg}></img></span>
          {nickname}
        </div>
        <a href={link} className="post-title">
          {title}
        </a>
        <div className="post-price">
          {price.toLocaleString()} 원
        </div>
        <div className="post-tag">
          #{tag} {/* 태그를 하나만 표시 */}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
