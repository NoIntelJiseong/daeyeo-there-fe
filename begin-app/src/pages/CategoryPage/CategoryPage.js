// CategoryPage.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // useParams import
import PostCardList from './PostCardList';
import './CategoryPage.css'; // 필요에 따라 CSS 파일 추가
import SearchBar from '../../pages/components/CommonComponents/SearchBar';
import '../components/CommonComponents/SearchBar.css';
import Head from '../../pages/components/CommonComponents/Head'

const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);

const getImagePath = (imageName) => {
  return images(`./${imageName}`);
};

const handleSearch = (query) => {
  console.log('검색어:', query);
};

function CategoryPage() {
  const { category } = useParams(); // URL 파라미터에서 카테고리 정보를 가져옴
  const decodedCategory = decodeURIComponent(category);

  const [posts, setPosts] = useState([]); // 모든 게시글 데이터를 저장할 상태
  const [filteredPosts, setFilteredPosts] = useState([]); // 필터링된 게시글 데이터를 저장할 상태
  const [filter, setFilter] = useState(''); // 현재 선택된 태그 필터

  useEffect(() => {
    const generateMockPosts = () => {
      const categories = [
        '패션의류', '패션잡화', '출산/유아동', '가전제품', '카메라/캠코더',
        '가구/인테리어', '리빙/생활', '반려동물', '도서/음반/문구', '스포츠',
        '레저/여행', '공구/산업용품', '자동차용품', '장소'
      ];
      const mockPosts = categories.flatMap((cat, catIndex) =>
        Array.from({ length: 3 }, (_, index) => ({
          id: catIndex * 10 + index + 1,
          title: `테스트 게시글 ${cat} ${index + 1}`,
          description: `이것은 ${cat}에 대한 테스트 설명입니다.`,
          nickname: `사용자 ${catIndex * 10 + index + 1}`,
          price: Math.floor(Math.random() * 10000) + 1000,
          tag: index % 2 === 0 ? '빌려드려요' : '빌려요',
          category: cat,
          image: `https://via.placeholder.com/150?text=${encodeURIComponent(cat)}+${index + 1}`,
          link: `/post/${catIndex * 10 + index + 1}`,
        }))
      );

      setPosts(mockPosts);
      // 초기 필터링: 선택된 카테고리에 맞는 게시글만 필터링
      setFilteredPosts(mockPosts.filter(post => post.category === decodedCategory));
    };

    generateMockPosts();
  }, [decodedCategory]);

  // 태그 필터 변경 함수
  const handleFilterChange = (event) => {
    const selectedTag = event.target.value; // 선택한 옵션의 값을 가져옴
    setFilter(selectedTag);

    // 전체보기인 경우 카테고리에 맞는 모든 게시글 표시
    if (selectedTag === '') {
      setFilteredPosts(posts.filter(post => post.category === decodedCategory));
    } else {
      // 선택된 태그와 카테고리에 맞는 게시글만 필터링
      setFilteredPosts(posts.filter(post => post.category === decodedCategory && post.tag === selectedTag));
    }
  };

  return (
    <div className="App">
      <Head />
      
      <p style={{ whiteSpace: "pre-wrap" }}><br /></p>
      <h1 className="listhead">{decodedCategory} 게시글 목록</h1>
      <p style={{ whiteSpace: "pre-wrap" }}><br /></p>

      {/* 태그 필터링을 위한 select 옵션 */}
      <select value={filter} onChange={handleFilterChange} className="filter-select">
        <option value="">전체 보기</option>
        <option value="빌려드려요">빌려드려요</option>
        <option value="빌려요">빌려요</option>
      </select>

      {/* PostCardList를 사용하여 필터링된 게시글 렌더링 */}
      <PostCardList posts={filteredPosts} />
    </div>
  );
}

export default CategoryPage;
