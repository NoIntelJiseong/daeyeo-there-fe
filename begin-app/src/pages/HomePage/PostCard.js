// PostCard.js
import React from 'react';
import './PostCard.css'; // CSS 파일을 import하여 스타일링

const PostCard = ({ post }) => {
  const { image, nickname, title, tags, link } = post;

  


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
          <span className="profile-dot"></span>
          {nickname}
        </div>
        <a href={link} className="post-title">
          {title}
        </a>
        <div className="post-tags">
          {tags.map((tag, index) => (
            <span key={index} className="post-tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
