import './MyPage.css';
import React from 'react';
import SearchBar from '../../pages/components/CommonComponents/SearchBar';
import CircularProgress from './chart/CircularProgress';

const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);

const getImagePath = (imageName) => {
  return images(`./${imageName}`);
};

const posts = [
  { id: 1, title: '대여해드립니다.', price: '3,000원', tags: ['태그1', '태그2', '태그3'], imageName: 'no_photo.png' },
  { id: 2, title: '대여해드립니다.', price: '5,000원', tags: ['태그A', '태그B'], imageName: 'no_photo.png' },
  { id: 3, title: '대여해드립니다.', price: '2,500원', tags: ['태그X', '태그Y', '태그Z'], imageName: 'no_photo.png' },
  { id: 4, title: '대여해드립니다.', price: '7,500원', tags: ['태그7', '태그8', '태그9'], imageName: 'no_photo.png' },
  // 추가 게시글 데이터
];

const PostCard = ({ post }) => (
  <div className="post-card">
    <div className="post-image">
      <img src={getImagePath(post.imageName)} alt={post.title} />
    </div>
    <div className="post-info">
      <p className="title">{post.title}</p>
      <p className="price">{post.price}</p>
      <div className="tags">
        {post.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const MyPage = () => {
  const logoPath = getImagePath('logo.png');
  const chatImagePath = getImagePath('채팅.png'); 
  const profileImagePath = getImagePath('프로필.png'); 

  const trustScore = 80; // 신뢰도 값 (0.0 ~ 1.0)
  const strokeWidth = 5; // 테두리 두께 줄이기

  const handleSearch = (query) => {
    console.log('검색어:', query);
  };

  const handleChatClick = () => {
    console.log('채팅 버튼 클릭됨');
  };

  const handleProfileClick = () => {
    console.log('프로필 버튼 클릭됨');
  };

  return (
    <div>
      <header className="헤더">
        <span className="image-container">
          <img src={logoPath} className="main-image" alt="Logo" />
        </span>
        <SearchBar onSearch={handleSearch} />
        <span id="로그인">
          <button className="가입버튼" id="빌려주기">빌려주기</button>
          <button className="가입버튼" onClick={handleChatClick}>
            <img src={chatImagePath} alt="채팅" className="button-image" />
          </button>
          <button className="가입버튼" onClick={handleProfileClick}>
            <img src={profileImagePath} alt="프로필" className="button-image" />
          </button>
        </span>
      </header>
      <div className="my-page">
        <div className="profile-section">
          <div className="profile-image-container">
            <div className="profile-image-placeholder">
              <img src={getImagePath('프로필_채색.png')} alt="Profile" />
            </div>
            <p className="product-follower">상품 nn | 팔로워 nn</p>
          </div>
          <div className="profile-info">
            <h2 className="nickname">닉네임</h2>
            <p className="bio">소개글을 작성하세요.</p>
            <div className="buttons">
              <button className="button safe-transaction">안전거래 nn</button>
              <button className="button review">거래후기 nn</button>
            </div>
          </div>
          <div className="trust-score-section">
            <CircularProgress percentage={trustScore} />
          </div>
        </div>
        <div className="post-list">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyPage;
