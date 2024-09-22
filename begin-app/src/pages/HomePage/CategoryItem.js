// CategoryItem.js
import React from 'react';
import './CategoryItem.css';

const CategoryItem = ({ iconSrc, label, onClick }) => {
  return (
    <div className="category-item" onClick={onClick}> {/* 클릭 시 onClick 호출 */}
      <div className="icon-wrapper">
        <img src={iconSrc} alt={label} className="category-icon" />
      </div>
      <p className="category-label">{label}</p>
    </div>
  );
};

export default CategoryItem;
