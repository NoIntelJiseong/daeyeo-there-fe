import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';     // HomePage 경로
import LoginPage from './pages/LoginPage/LoginPage';  // LoginPage 경로
import JoinPage from './pages/JoinPage/JoinPage';     // JoinPage 경로
import MyPage from './pages/MyPage/MyPage';           // MyPage 경로
import OwnerPostPage from './pages/OwnerPostPage/OwnerPostPage';  // OwnerPostPage 경로
import PostPage from './pages/PostPage/PostPage';     // PostPage 경로
import CategoryPage from './pages/CategoryPage/CategoryPage'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Routes 설정 */}
        <Routes>
          {/* 기본 홈 경로 */}
          <Route path="/" element={<HomePage />} />

          {/* 로그인 페이지 경로 */}
          <Route path="/login" element={<LoginPage />} />

          {/* 회원가입 페이지 경로 */}
          <Route path="/join" element={<JoinPage />} />

          {/* 마이페이지 경로 */}
          <Route path="/mypage" element={<MyPage />} />

          {/* 게시물 작성 페이지 경로 */}
          <Route path="/post" element={<PostPage />} />

          {/* 게시글 페이지 경로 */}
          <Route path="/ownerpost" element={<OwnerPostPage />} />

          {/* 카테고리 페이지 경로 */}
          <Route path='/category/:category' element={<CategoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
