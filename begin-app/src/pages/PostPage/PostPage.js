import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 추가
import './PostPage.css';
import SearchBar from '../../pages/components/CommonComponents/SearchBar';
import CircularProgress from './chart/CircularProgress';
import Profile from './Profile'; // Profile 컴포넌트 import

const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);

const getImagePath = (imageName) => {
  return images(`./${imageName}`);
};

const handleSearch = (query) => {
  console.log('검색어:', query);
};

const PostPage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const imagePath = getImagePath('logo.png');

  // 더미 게시글 데이터 정의
  const post = {
    title: '상품 제목 예시',
    image: '이미지 URL 또는 경로', // 실제 이미지 URL로 변경 필요
    smallImages: ['작은 이미지1 URL', '작은 이미지2 URL', '작은 이미지3 URL', '작은 이미지4 URL'], // 실제 이미지 URL로 변경 필요
    description: '이 상품은 아주 멋진 제품입니다. 상세 설명이 여기에 들어갑니다.',
    tags: ['빌려드립니다'], // 태그를 "빌려드립니다"로 설정
    price: 30000,  // 가격 예시
    trustScore: 85, // 신뢰도 예시 (0-100)
    profileImage: '프로필_이미지_URL', // 프로필 이미지 URL 추가
    nickname: '사용자닉네임', // 닉네임 추가
  };

  // 더미 리뷰 데이터 정의
  const reviews = [
    { author: '사용자1', text: '정말 좋은 상품입니다!' },
    { author: '사용자2', text: '품질이 매우 만족스럽습니다.' },
  ];

  // 버튼 클릭 핸들러 정의
  const handleLogoClick = () => {
    navigate('/'); // 로고 클릭 시 홈으로 이동
  };

  const handleBorrowClick = () => {
    navigate('/login'); // 빌려주기 버튼 클릭 시 로그인 페이지로 이동
  };

  const handleLoginClick = () => {
    navigate('/login'); // 로그인 버튼 클릭 시 로그인 페이지로 이동
  };

  const handleJoinClick = () => {
    navigate('/join'); // 회원가입 버튼 클릭 시 회원가입 페이지로 이동
  };

  return (
    <div>
      {/* 헤더 섹션 */}
      <header className="헤더">
        <span className="image-container">
        <img onClick={handleLogoClick} src={imagePath} className="main-image" alt='logo' />
      </span>
      <SearchBar onSearch={handleSearch} />
      <span id="로그인">
        <button onClick={handleBorrowClick} className="가입버튼" id="빌려주기">빌려주기</button>
        <button onClick={handleLoginClick} className="가입버튼">로그인</button>
        <button onClick={handleJoinClick} className="가입버튼">회원가입</button>
      </span>
      </header>

      {/* 게시글 상세 내용 */}
      <div className="post-detail-container">
        {/* 작은 이미지들 */}
        <div className="small-images">
          {post.smallImages.map((smallImage, index) => (
            <img key={index} src={smallImage} alt={`작은 이미지 ${index + 1}`} className="small-image" />
          ))}
        </div>

        {/* 큰 이미지 */}
        <div className="large-image-container">
          <img src={post.image} alt={post.title} className="large-image" />
        </div>

        {/* 오른쪽 섹션: 제목, 가격, 태그 */}
        <div className="right-section">
          {/* 제목 */}
          <div className="product-title">{post.title}</div>

          {/* 가격 */}
          <div className="post-price">
            <h3>가격: {post.price.toLocaleString()}원</h3>
          </div>

          {/* 프로필 컴포넌트 사용 */}
          <Profile profileImage={post.profileImage} nickname={post.nickname} />

          {/* 태그 */}
          <div className="post-tags">
            <div className="tag-list">
              <span className="tag">{post.tags[0]}</span> {/* "빌려드립니다" 태그 */}
            </div>
          </div>

          {/* 신뢰도 섹션 */}
          <div className="trust-score-section">
            <CircularProgress percentage={post.trustScore} />
          </div>
        </div>
      </div>

      {/* 이미지 아래 섹션: 설명 및 리뷰 */}
      <div className="below-image-section">
        {/* 설명 */}
        <div className="post-description">{post.description}</div>

        {/* 리뷰 섹션 */}
        <div className="reviews-section">
          <h3>리뷰:</h3>
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <strong>{review.author}:</strong> {review.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
