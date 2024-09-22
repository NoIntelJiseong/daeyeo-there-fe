// PostCardList.js
import React from 'react';
import PostCard from './PostCard'; // PostCard 컴포넌트를 import
import './PostCardList.css'; // CSS 파일 import

const PostCardList = ({ posts }) => {
  return (
    <div className="post-card-list">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default PostCardList;
