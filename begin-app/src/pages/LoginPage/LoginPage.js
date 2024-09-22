import './LoginPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import SearchBar from '../../pages/components/CommonComponents/SearchBar';
import { useState } from 'react';
import LoginBar from './LoginBar';
import '../components/CommonComponents/SearchBar.css';

const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);

const getImagePath = (imageName) => {
  return images(`./${imageName}`);
};

const handleSearch = (query) => {
  console.log('검색어:', query);
};

const post = {
  "name": "string",
  "password": "string"
};

const LoginPage = () => {
  const navigate = useNavigate(); // Initialize navigate
  const imagePath = getImagePath('logo.png');

  const handleLogin = (credentials) => {
    console.log('Login ID:', credentials.loginId);
    console.log('Password:', credentials.password);
  };

  return (
    <div>
      <header className="헤더">
        <span className="image-container">
          <img 
            src={imagePath} 
            className="main-image" 
            onClick={() => navigate('/')} // Navigate to homepage when logo is clicked
          />
        </span>
        <SearchBar onSearch={handleSearch} />
        <span id="로그인">
          <button className="가입버튼" id="빌려주기">빌려주기</button>
          <button className="가입버튼" onClick={() => navigate('/login')}>로그인</button> {/* Navigate to login */}
          <button className="가입버튼" onClick={() => navigate('/join')}>회원가입</button> {/* Navigate to signup */}
        </span>
      </header>
      <div className="center-box">
        <img 
          src={imagePath} 
          alt='Logo' 
          className='logo-image' 
          onClick={() => navigate('/')} // Navigate to homepage when logo inside center-box is clicked
        />
        <p>대여?돼요!에 오신 것을 환영합니다.</p>
        <LoginBar onLogin={handleLogin} />
      </div>
    </div>
  );
}

export default LoginPage;
