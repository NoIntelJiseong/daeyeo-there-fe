// PostCardList.js
import React from 'react';
import PostCard from './PostCard';
import './PostcardList.css'; // 스타일 파일을 import하여 그리드 레이아웃 적용

const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);

const getImagePath = (imageName) => {
  return images(`./${imageName}`);
};

// 게시글 데이터 예시
const posts = [
  {
    image: getImagePath('1.jpg'),
    nickname: '사용자1',
    title: '게시글 제목1',
    tags: ['태그1', '태그2', '태그3'],
    link: '/post/1',
  },
  {
    image: getImagePath('2.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('3.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('4.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('5.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('6.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('7.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('8.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('9.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('10.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('1.jpg'),
    nickname: '사용자1',
    title: '게시글 제목1',
    tags: ['태그1', '태그2', '태그3'],
    link: '/post/1',
  },
  {
    image: getImagePath('2.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('3.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('4.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('5.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('6.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('7.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('8.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('9.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  },
  {
    image: getImagePath('10.jpg'),
    nickname: '사용자2',
    title: '게시글 제목2',
    tags: ['태그4', '태그5'],
    link: '/post/2',
  }
  // 더 많은 게시글 데이터 추가
];

const PostCardList = () => {
  return (
    <div className="post-card-list">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default PostCardList;
