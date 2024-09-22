import './JoinPage.css';
import React from 'react';
import SearchBar from '../../pages/components/CommonComponents/SearchBar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useState } from 'react';
import JoinBar from './JoinBar';
import '../components/CommonComponents/SearchBar.css';

const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);

const getImagePath = (imageName) => {
  return images(`./${imageName}`);
};

const handleSearch = (query) => {
  console.log('검색어:', query);
};

const JoinPage = () => {
  const imagePath = getImagePath('logo.png');
  const navigate = useNavigate(); // Define navigate hook for navigation

  const handleLogin = (credentials) => {
    console.log('Login ID:', credentials.loginId);
    console.log('Password:', credentials.password);
    navigate('/login'); // Navigate to login after signup
  };

  const handleLogoClick = () => {
    navigate('/'); // Navigate to homepage when logo is clicked
  };

  return (
    <div>
      <header className="헤더">
        <span className="image-container" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={imagePath} className="main-image" alt="Logo" />
        </span>
        <SearchBar onSearch={handleSearch} />
        <span id="로그인">
          <button className="가입버튼" id="빌려주기">빌려주기</button>
          <button className="가입버튼" onClick={() => navigate('/login')}>로그인</button>
          <button className="가입버튼" onClick={() => navigate('/join')}>회원가입</button> {/* Navigate to signup */}
        </span>
      </header>
      <div className="center-box">
        <img src={imagePath} alt='Logo' className='logo-image' onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
        <p>대여?돼요!에 오신 것을 환영합니다.
          <br />회원이 되어 다양한 혜택을 경험해 보세요!</p>
        <JoinBar onLogin={handleLogin} /> {/* Trigger login after signup */}
      </div>
    </div>
  );
};

export default JoinPage;
