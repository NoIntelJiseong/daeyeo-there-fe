
import './HomePage.css';
import React, {useState} from 'react';
import SearchBar from '../../pages/components/CommonComponents/SearchBar';
import '../components/CommonComponents/SearchBar.css';
import CategoryList from './CategoryList';
import { useNavigate } from 'react-router-dom';
import Head from '../../pages/components/CommonComponents/Head'

import PostcardList from './PostcardList';

const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);



const getImagePath = (imageName) => {
  return images(`./${imageName}`);
};

const handleSearch = (query) => {
  console.log('검색어:', query); // 실제로는 API 요청이나 다른 로직이 들어갈 수 있음
};

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(''); // 선택된 카테고리 상태
  const imagePath = getImagePath('logo.png');
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/category/${encodeURIComponent(category)}`); // 카테고리 이름을 인코딩
  };

  const handleLoginClick = () =>{
    navigate(`/login`);
  }

  const handleJoinClick = () => {
    navigate('/join');
  }

  
  return (
    <div>
      <Head />
      
      <p style={{ whiteSpace: "pre-wrap" }}><br></br></p>

      {/* CategoryList에서 카테고리 아이콘을 클릭하면 handleCategoryClick이 호출되도록 설정 */}
      <CategoryList onCategoryClick={handleCategoryClick} />
      <p style={{ whiteSpace: "pre-wrap" }}><br></br></p>
      <div id="최신상품">최신 상품</div>
      <p style={{ whiteSpace: "pre-wrap" }}><br></br></p>
      <PostcardList />
      
      <button className="가입버튼" onClick={handleLoginClick}>
        로그인
      </button>
      <button className='가입버튼' onClick={handleJoinClick}>
        회원가입
      </button>

    </div>
  );
};

export default HomePage;


