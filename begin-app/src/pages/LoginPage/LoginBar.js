import React, { useState } from 'react';
import './LoginBar.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

// Dynamically import images from the assets folder
const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);

const getImagePath = (imageName) => {
  return images(`./${imageName}`);
};

const LoginBar = ({ onLogin }) => {
  const navigate = useNavigate(); // Initialize navigate
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(true); 
  const [saveId, setSaveId] = useState(false); // State for the checkbox

  const handleValue = (e) => {
    const { id, value } = e.target;
    if (id === 'name') {
      setName(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  const togglePasswordVisibility = () => {
    setHiddenPassword(!hiddenPassword);
  };

  const validationCheck = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      alert('이름을 입력하세요.');
      return;
    }
    if (password.length < 5) {
      alert('비밀번호는 5자리 이상 입력하세요.');
      return;
    }

    // Pass the data in the format the backend expects
    onLogin({ name, password });

    // Save the name in localStorage if 'saveId' is checked
    if (saveId) {
      localStorage.setItem('savedName', name);
    }
  };

  const isButtonActive = name.length >= 1 && password.length >= 1;

  const eyeOpenImage = getImagePath('eye.png');
  const eyeClosedImage = getImagePath('hide.png');

  return (
    <div className="login-bar">
      <form>
        <input
          className="input-field"
          id="name"
          onChange={handleValue}
          type="text"
          placeholder="이름 입력"
          value={name}
        />
        <div className="password-container">
          <input
            className="input-field"
            id="password"
            onChange={handleValue}
            type={hiddenPassword ? 'password' : 'text'}
            placeholder="비밀번호 입력"
            value={password}
          />
          <span className="toggle-password" onClick={togglePasswordVisibility}>
            <img
              src={hiddenPassword ? eyeClosedImage : eyeOpenImage}
              alt={hiddenPassword ? '비밀번호 보이기' : '비밀번호 숨기기'}
            />
          </span>
        </div>
        <div className="login-actions">
          <button
            onClick={validationCheck}
            className={`login-button ${isButtonActive ? 'activate' : ''}`}
          >
            로그인
          </button>
          <div className='checkbox-and-links'>
            <label className="checkbox-container">
              <input
                type="checkbox"
                checked={saveId}
                onChange={() => setSaveId(!saveId)}
              />
              아이디 저장
            </label>
            <div className='links-container'>
              <a href="#" className="forgot-password">
                비밀번호 분실/변경
              </a>
              <span className="divider">|</span>
              <a href="#" className="forgot-password">
                아이디 찾기
              </a>
            </div>
          </div>
        </div>
      </form>
      
      <div className="additional-options">
        <button 
          className="option-button"
          onClick={() => navigate('/join')} // Navigate to the signup page when button is clicked
        >
          회원가입
        </button>
      </div>
    </div>
  );
};

export default LoginBar;
