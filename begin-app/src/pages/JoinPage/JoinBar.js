import React, { useState } from 'react';
import './JoinBar.css';

const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);

const getImagePath = (imageName) => {
  return images(`./${imageName}`);
};

const JoinBar = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [hiddenPw, setHiddenPw] = useState(true);
  const [hiddenConfirmPw, setHiddenConfirmPw] = useState(true);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleValue = (e) => {
    const { id, value } = e.target;
    if (id === 'name') {
      setName(value);
    } else if (id === 'password1') {
      setPassword1(value);
    } else if (id === 'password2') {
      setPassword2(value);
    }
  };

  const toggleShowHidePassword = (which) => {
    if (which === 'password1') {
      setHiddenPw(!hiddenPw);
    } else if (which === 'password2') {
      setHiddenConfirmPw(!hiddenConfirmPw);
    }
  };

  const validationCheck = (e) => {
    e.preventDefault();
    if (!name || !password1 || !password2) {
      alert('모든 필드를 입력하세요.');
      return;
    }
    if (password1.length < 5) {
      alert('비밀번호는 5자리 이상 입력하세요.');
      return;
    }
    if (password1 !== password2) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (!termsAccepted) {
      alert('개인정보취급방침 및 이용약관에 동의해야 합니다.');
      return;
    }
    onRegister({ name, password1, password2 });
  };

  const eyeOpenImage = getImagePath('eye.png');
  const eyeClosedImage = getImagePath('hide.png');

  return (
    <div className="join-bar">
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
            id="password1"
            onChange={handleValue}
            type={hiddenPw ? 'password' : 'text'}
            placeholder="비밀번호 입력"
            value={password1}
          />
          <span className="toggle-password" onClick={() => toggleShowHidePassword('password1')}>
            <img
              src={hiddenPw ? eyeClosedImage : eyeOpenImage}
              alt={hiddenPw ? '비밀번호 보이기' : '비밀번호 숨기기'}
            />
          </span>
        </div>
        <div className="password-container">
          <input
            className="input-field"
            id="password2"
            onChange={handleValue}
            type={hiddenConfirmPw ? 'password' : 'text'}
            placeholder="비밀번호 확인"
            value={password2}
          />
        </div>
        <label className="checkbox-container">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
          />
          회원가입과 동시에 개인정보취급방침 및 이용약관에 동의하게 됩니다.
        </label>
        <button
          onClick={validationCheck}
          className={`join-button`}
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default JoinBar;
