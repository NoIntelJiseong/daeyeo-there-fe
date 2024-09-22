import './ChatPage.css';
import React from 'react';
import SearchBar from './SearchBar';
import { useState } from 'react';
import './SearchBar.css';


const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);

const getImagePath = (imageName) => {
  return images(`./${imageName}`);
};

const handleSearch = (query) => {
  console.log('검색어:', query);
};

const ChatPage = () => {
  const logoPath = getImagePath('logo.png');
  const chatImagePath = getImagePath('채팅.png'); // Replace with actual chat image name
  const profileImagePath = getImagePath('프로필.png'); // Replace with actual profile image name

  const handleChatClick = () => {
    console.log('채팅 버튼 클릭됨');
    // Add navigation or logic to open the chat page here
  };

  const handleProfileClick = () => {
    console.log('프로필 버튼 클릭됨');
    // Add navigation or logic to open the profile page here
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
          
          {/* Replacing "채팅" button with an image */}
          <button className="가입버튼" onClick={handleChatClick}>
            <img src={chatImagePath} alt="채팅" className="button-image" />
          </button>

          {/* Replacing "프로필" button with an image */}
          <button className="가입버튼" onClick={handleProfileClick}>
            <img src={profileImagePath} alt="프로필" className="button-image" />
          </button>
        </span>
      </header>
    </div>
  );
}

export default ChatPage;
