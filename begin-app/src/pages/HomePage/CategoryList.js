// CategoryList.js
import React from 'react';
import './CategoryList.css';
import CategoryItem from './CategoryItem';

// require.context를 사용해 images 폴더의 모든 이미지를 가져옴
const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);



// 이미지를 가져오는 함수
const getImagePath = (imageName) => {
  try {
    return images(`./${imageName}`);
  } catch (error) {
    console.error('이미지를 불러올 수 없습니다:', error);
    return null; // 이미지가 없으면 null 반환
  }
};

// 카테고리 배열, 각 아이콘을 getImagePath로 불러옴
const categories = [
  { label: '패션의류', icon: getImagePath('패션의류.png') },
  { label: '패션잡화', icon: getImagePath('패션잡화.png') },
  { label: '출산/유아동', icon: getImagePath('유아동.png') },
  { label: '가전제품', icon: getImagePath('가전제품.png') },
  { label: '카메라/캠코더', icon: getImagePath('카메라.png') },
  { label: '가구/인테리어', icon: getImagePath('가구.png') },
  { label: '리빙/생활', icon: getImagePath('리빙.png') },
  { label: '반려동물', icon: getImagePath('반려동물.png') },
  { label: '도서/음반/문구', icon: getImagePath('도서.png') },
  { label: '스포츠', icon: getImagePath('스포츠.png') },
  { label: '레저/여행', icon: getImagePath('레저.png') },
  { label: '공구/산업용품', icon: getImagePath('공구.png') },
  { label: '자동차용품', icon: getImagePath('자동차용품.png') },
  { label: '장소', icon: getImagePath('장소.png') },
];

const CategoryList = ({onCategoryClick}) => {
  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          iconSrc={category.icon}
          label={category.label}
          onClick={() => onCategoryClick(category.label)} // 카테고리 라벨을 전달
        />
      ))}
    </div>
  );
};

export default CategoryList;
