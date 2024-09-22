import SearchBar from '../../components/CommonComponents/SearchBar';
import '../../components/CommonComponents/SearchBar.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './Head.css';

const images = require.context('../../../assets/images', false, /\.(png|jpe?g|svg)$/);

const getImagePath = (imageName) => {
  return images(`./${imageName}`);
};

const handleSearch = (query) => {
  console.log('검색어:', query); // 실제로는 API 요청이나 다른 로직이 들어갈 수 있음
};

const Head = () => {
  const imagePath = getImagePath('logo.png');
  const navigate = useNavigate();
  
  const handleLogoClick = () => {
    navigate('/'); // 로고 클릭 시 홈으로 이동
  };

  const handleLoginClick = () => {
    navigate('/login'); // 로그인 클릭 시 이동
  };

  const handleJoinClick = () => {
    navigate('/join'); // 회원가입 클릭 시 이동
  };

  const handleBorrowClick = () => {
    navigate('/login'); // 빌려주기 클릭 시 로그인 페이지로 이동
  };

  return (
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
  );
}

export default Head;
