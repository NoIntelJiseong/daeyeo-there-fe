// SearchBar.js
import React, { useState } from 'react';
import searchIcon from '../../assets/images/search-icon.png';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        placeholder="제목, 상품명 검색"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">
        <img src={searchIcon} alt="search" className="search-icon" />
      </button>
    </form>
  );
};

export default SearchBar;
