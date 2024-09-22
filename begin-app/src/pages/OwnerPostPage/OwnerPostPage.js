import React, { useState } from 'react';
import './OwnerPostPage.css';
import SearchBar from '../../pages/components/CommonComponents/SearchBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);

const getImagePath = (imageName) => {
  return images(`./${imageName}`);
};

const handleSearch = (query) => {
  console.log('검색어:', query);
};

const categories = [
  '패션의류', '패션잡화', '출산/유아동', '가전제품', '카메라/캠코더',
  '가구/인테리어', '리빙/생활', '스포츠/레저', '도서/음반', '취미/게임'
];

const OwnerPostPage = () => {
  const logoPath = getImagePath('logo.png');
  const chatImagePath = getImagePath('채팅.png'); 
  const profileImagePath = getImagePath('프로필.png'); 

  const [post, setPost] = useState({
    title: '',
    description: '',
    username: '사용자닉네임', // 기본값 예시
    image_url: '',
    cost_hour: 0,
    cost_day: 0,
    cost_week: 0,
    available_from: new Date(), // 시작 날짜
    available_to: new Date(), // 종료 날짜
    category: '',
  });

  const handleChatClick = () => {
    console.log('채팅 버튼 클릭됨');
  };

  const handleProfileClick = () => {
    console.log('프로필 버튼 클릭됨');
  };

  const handleTitleChange = (e) => {
    setPost({ ...post, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setPost({ ...post, description: e.target.value });
  };

  const handleCategoryChange = (category) => {
    setPost({ ...post, category });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPost({ ...post, image_url: URL.createObjectURL(file) });
    }
  };

  const handleStartDateChange = (date) => {
    setPost({ ...post, available_from: date });
  };

  const handleEndDateChange = (date) => {
    setPost({ ...post, available_to: date });
  };

  const handlePriceChange = (type, value) => {
    setPost({ ...post, [type]: value });
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

      <div className="product-registration-container">
        <h2>상품 등록</h2>

        <div className="form-group">
          <h3>이미지 등록</h3>
          <div className="image-upload">
            <input
              type="file"
              accept="image/*"
              id="file-input"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
            <label htmlFor="file-input" className="upload-box">
              이미지 등록
            </label>
            {post.image_url && <img src={post.image_url} alt="Uploaded" className="uploaded-image" />}
          </div>
        </div>

        <div className="form-group">
          <h3>게시글 제목<span className='required'>*</span></h3>
          <input
            type="text"
            value={post.title}
            onChange={handleTitleChange}
            placeholder="제목을 입력해 주세요"
          />
        </div>

        <div className="form-group">
          <h3>카테고리<span className="required">*</span></h3>
          <div className="category-list">
            <div className="category-scroll">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`category-item ${post.category === category ? 'selected' : ''}`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="form-group">
          <h3>기간 선택</h3>
          <div className="calendar-container">
            <div className="date-picker">
              <label>시작 날짜</label>
              <Calendar
                onChange={handleStartDateChange}
                value={post.available_from}
              />
            </div>
            <div className="date-picker">
              <label>종료 날짜</label>
              <Calendar
                onChange={handleEndDateChange}
                value={post.available_to}
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <h3>상세 설명<span className='required'>*</span></h3>
          <textarea
            value={post.description}
            onChange={handleDescriptionChange}
            placeholder="상세 설명을 입력해 주세요"
            maxLength={2000}
            rows={4}
          />
          <p>{post.description.length}/2000</p>
        </div>

        {/* 가격 입력 필드 추가 */}
        <div className="form-group">
          <h3>가격<span className="required">*</span></h3>
          <div className="price-inputs-container">
            <div className="price-input">
              <label>시간당</label>
              <input
                type="number"
                value={post.cost_hour}
                onChange={(e) => handlePriceChange('cost_hour', e.target.value)}
                placeholder="시간당 가격을 입력해 주세요"
                className="price-field"
              />
              <span className="currency">원</span>
            </div>

            <div className="price-input">
              <label>일당</label>
              <input
                type="number"
                value={post.cost_day}
                onChange={(e) => handlePriceChange('cost_day', e.target.value)}
                placeholder="일당 가격을 입력해 주세요"
                className="price-field"
              />
              <span className="currency">원</span>
            </div>

            <div className="price-input">
              <label>주당</label>
              <input
                type="number"
                value={post.cost_week}
                onChange={(e) => handlePriceChange('cost_week', e.target.value)}
                placeholder="주당 가격을 입력해 주세요"
                className="price-field"
              />
              <span className="currency">원</span>
            </div>
          </div>
        </div>

        <button 
          className="register-button" 
          onClick={() => console.log('등록하기', post)}
          style={{
            marginTop: '10px',
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#286170',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default OwnerPostPage;
