import React from 'react';
import JoinBar from './JoinBar';

const ParentComponent = () => {
  const handleRegister = (data) => {
    console.log('회원가입 데이터:', data);
    // 여기서 실제 회원가입 로직을 구현하거나 API 호출을 하세요.
  };

  return (
    <div>
      <h1>회원가입</h1>
      <JoinBar onRegister={handleRegister} />
    </div>
  );
};

export default ParentComponent;
