import React from 'react';
import './Profile.css'; // 스타일을 위한 CSS 파일

const Profile = ({ profileImage, nickname }) => {
  return (
    <div className="profile">
      <img src={profileImage} alt="프로필" className="profile-image" />
      <span className="nickname">{nickname}</span>
    </div>
  );
};

export default Profile;
