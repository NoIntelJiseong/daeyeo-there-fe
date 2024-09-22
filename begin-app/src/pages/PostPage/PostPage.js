import React, { useEffect, useState } from 'react'; // useEffect 및 useState import 추가
import { useNavigate, useParams } from 'react-router-dom'; // useNavigate 및 useParams import
import './PostPage.css';
import SearchBar from '../../pages/components/CommonComponents/SearchBar';
import CircularProgress from './chart/CircularProgress';
import Profile from './Profile'; // Profile 컴포넌트 import

const images = require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/);

const getImagePath = (imageName) => {
  return images(`./${imageName}`);
};

const handleSearch = (query) => {
  console.log('검색어:', query);
};

const PostPage = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const imagePath = getImagePath('logo.png');
  const { id } = useParams(); // URL 파라미터에서 ID 가져오기
  const [post, setPost] = useState(null); // 포스트 상태
  const [loading, setLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    // 실제 데이터를 가져오는 함수
    const fetchPostData = async () => {
      // 여기서 API 호출 또는 로컬 데이터에서 포스트를 찾아서 setPost를 호출해야 합니다.
      // 아래는 더미 데이터 예시입니다.
      const fetchedPostData = {
        title: '상품 제목 예시',
        image: '이미지 URL 또는 경로', // 실제 이미지 URL로 변경 필요
        smallImages: ['작은 이미지1 URL', '작은 이미지2 URL', '작은 이미지3 URL', '작은 이미지4 URL'], // 실제 이미지 URL로 변경 필요
        description: '이 상품은 아주 멋진 제품입니다. 상세 설명이 여기에 들어갑니다.',
        tags: ['빌려드립니다'], // 태그를 "빌려드립니다"로 설정
        price: 30000,  // 가격 예시
        trustScore: 85, // 신뢰도 예시 (0-100)
        profileImage: '프로필_이미지_URL', // 프로필 이미지 URL 추가
        nickname: '사용자닉네임', // 닉네임 추가
      };

      setPost(fetchedPostData);
      setLoading(false);
    };

    fetchPostData();
  }, [id]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  // 더미 리뷰 데이터 정의
  const reviews = [
    { author: '사용자1', text: '정말 좋은 상품입니다!' },
    { author: '사용자2', text: '품질이 매우 만족스럽습니다.' },
  ];

  return (
    <div>
      {/* 헤더 섹션 */}
      <header className="헤더">
        <span className="image-container" onClick={() => navigate('/')}>
          <img src={imagePath} className="main-image" alt="Logo" />
        </span>
        <SearchBar onSearch={handleSearch} />
        <span id="로그인">
          <button className="가입버튼" onClick={() => navigate('/login')}>로그인</button>
          <button className="가입버튼" onClick={() => navigate('/join')}>회원가입</button>
          <button className="가입버튼" id="빌려주기">빌려주기</button>
        </span>
      </header>

      {/* 게시글 상세 내용 */}
      <div className="post-detail-container">
        {/* 작은 이미지들 */}
        <div className="small-images">
          {post.smallImages.map((smallImage, index) => (
            <img key={index} src={smallImage} alt={`작은 이미지 ${index + 1}`} className="small-image" />
          ))}
        </div>

        {/* 큰 이미지 */}
        <div className="large-image-container">
          <img src={post.image} alt={post.title} className="large-image" />
        </div>

        {/* 오른쪽 섹션: 제목, 가격, 태그 */}
        <div className="right-section">
            {/* 제목 */}
            <div className="product-title">{post.title}</div>

            {/* 가격 */}
            <div className="post-price">
                <h3>가격: {post.price.toLocaleString()}원</h3>
            </div>

            {/* 프로필 컴포넌트 사용 */}
            <Profile profileImage={post.profileImage} nickname={post.nickname} />

            {/* 태그 */}
            <div className="post-tags">
                <div className="tag-list">
                    <span className="tag">{post.tags[0]}</span> {/* "빌려드립니다" 태그 */}
                </div>
            </div>

            {/* 신뢰도 섹션 */}
            <div className="trust-score-section">
                <CircularProgress percentage={post.trustScore} />
            </div>
        </div>
      </div>

      {/* 이미지 아래 섹션: 설명 및 리뷰 */}
      <div className="below-image-section">
        {/* 설명 */}
        <div className="post-description">{post.description}</div>

        {/* 리뷰 섹션 */}
        <div className="reviews-section">
          <h3>리뷰:</h3>
          {reviews.map((review, index) => (
            <div key={index} className="review">
              <strong>{review.author}:</strong> {review.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
