// OwnerPost.js
import React, { useEffect, useState } from 'react';

const OwnerPost = ({ postId, onDataReceive }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`/ownerPost/${postId}`);
        // 응답이 JSON인지 확인
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error('서버에서 올바른 JSON이 아닌 데이터를 반환했습니다.');
        }
        const data = await response.json();
        setPost(data);
        onDataReceive(data);
      } catch (error) {
        setError(error.message);
        console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId, onDataReceive]);

  if (loading) return <p>로딩 중...</p>;
  if (error) return <p>에러: {error}</p>;

  return null; // 데이터를 받아 App.js에서 렌더링하는 용도로만 사용
};

export default OwnerPost;
