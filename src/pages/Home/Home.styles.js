import styled from "styled-components";

import { Link, NavLink } from "react-router-dom";

export const HomeLogoSection = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NoticeSection = styled.div`
  padding: 0px 100px;
  text-align: center;
`;

export const NoticeWrap = styled.div`
  padding: 4px; /* ← border 두께 */
  border-radius: 120px 60px 120px 20px;
  background: linear-gradient(135deg, #f26eff, #3eb1fb);
`;

export const NoticeInner = styled.div`
  background: #fff;
  border-radius: 120px 60px 120px 20px;
  overflow: hidden;
`;

export const NoticeHeader = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px 0px 80px;
  color: white;
  background: linear-gradient(135deg, #f26eff, #3eb1fb);

  h2 {
    font-family: "Afacad";
    font-size: 40px;
    font-weight: 800;
    letter-spacing: 10%;
  }
`;

export const MoreLink = styled(Link)`
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    animation: jelly-soft 0.45s;
  }
  
@keyframes jelly-soft {
  0%   { transform: scale(1); }
  35%  { transform: scale(1.18, 0.9); }
  55%  { transform: scale(0.97, 1.05); }
  75%  { transform: scale(1.03, 0.98); }
  100% { transform: scale(1); }
}
`

export const NoticeList = styled.ul`
  padding: 24px 60px;

  li {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #eee;

    div {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    &:last-child {
      border-bottom: none;
    }

    p {
      font-size: 14px;
    }

    span {
      font-size: 12px;
      color: #aaa;
    }
  }
`;

export const BannerSection = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 60px 0;
`;

export const BannerTrack = styled(NavLink)`
  display: flex;
  width: fit-content;
  animation: slide 30s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

export const BannerItem = styled.div`
  width: 250px;
  height: 150px;
  flex-shrink: 0;
  margin-right: 20px;

  /* 🌈 그라데이션 스트로크 핵심 */
  padding: 3px;
  border-radius: 16px;
  background: linear-gradient(135deg, #ff9ad5, #a78bfa, #6ee7f9);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 13px;
    background: #fff;
  }
`;
