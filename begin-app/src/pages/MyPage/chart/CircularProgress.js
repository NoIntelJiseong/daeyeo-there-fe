// CircularProgress.js
import React, { useEffect, useRef } from 'react';
import './CircularProgress.css'; // 스타일 파일

const CircularProgress = ({ percentage }) => {
  const radius = 120; // 원의 반지름
  const stroke = 5; // 원의 두께
  const normalizedRadius = radius - stroke * 2; // 내부 반지름 계산
  const circumference = normalizedRadius * 2 * Math.PI; // 원의 둘레 계산
  const circleRef = useRef(null); // circle 요소의 참조

  // offset 계산: percentage에 따라 strokeDashoffset 값을 설정
  const offset = circumference - (percentage / 100) * circumference;

  useEffect(() => {
    // 애니메이션 효과 적용
    if (circleRef.current) {
      circleRef.current.style.transition = 'stroke-dashoffset 1s ease-in-out'; // 애니메이션 설정
      circleRef.current.style.strokeDashoffset = offset; // offset 설정
    }
  }, [offset]); // offset 값이 변경될 때마다 실행

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e0e0e0" // 바탕 색상
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        ref={circleRef} // circle 요소 참조
        stroke="#306a75" // 채워질 색상
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + ' ' + circumference}
        strokeDashoffset={circumference} // 초기 값 설정
        strokeLinecap="round" // 끝부분 둥글게
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`} // 12시 방향에서 시작
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fontSize="16px"
        fill="#306a75"
      >
        신뢰도
      </text>
    </svg>
  );
};

export default CircularProgress;
