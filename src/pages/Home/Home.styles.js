import styled from "styled-components";

import { Link, NavLink } from "react-router-dom";
import { media } from "../../styles/media";

export const HomeLogoSection = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 80%;
  }
`;

export const NoticeSection = styled.div`
  padding: 0px 100px;
  text-align: center;

  ${media.desktop} {
    padding: 0px 40px;
  }

  ${media.tablet} {
    padding: 0px 60px;
  }

  ${media.mobile} {
    padding: 0px 30px;
  }
`;

export const NoticeWrap = styled.div`
  padding: 4px; /* ← border 두께 */
  border-radius: 120px 60px 120px 20px;
  background: linear-gradient(135deg, #f26eff, #3eb1fb);

  ${media.tablet} {
    border-radius: 60px 40px 60px 10px;
  }

  ${media.mobile} {
    border-radius: 30px 20px 30px 4px;
  }
`;

export const NoticeInner = styled.div`
  background: #fff;
  border-radius: 120px 60px 120px 20px;
  overflow: hidden;

  ${media.tablet} {
    border-radius: 60px 40px 60px 10px;
  }

  ${media.mobile} {
    border-radius: 30px 20px 30px 4px;
  }
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

  ${media.tablet} {
    height: 72px;
    padding: 0px 30px 0px 40px;

    h2 {
      font-size: 32px;
    }
  }

  ${media.mobile} {
    height: 60px;
    padding: 0px 24px 0px 32px;
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
    0% {
      transform: scale(1);
    }
    35% {
      transform: scale(1.18, 0.9);
    }
    55% {
      transform: scale(0.97, 1.05);
    }
    75% {
      transform: scale(1.03, 0.98);
    }
    100% {
      transform: scale(1);
    }
  }

  ${media.tablet} {
    font-size: 14px;
  }

  ${media.mobile} {
    font-size: 12px;
  }
`;

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
      
      flex: 1;
      min-width: 0;
    }

    &:last-child {
      border-bottom: none;
    }

    p {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    span {
      font-size: 12px;
      color: #aaa;
    }
  }

  ${media.tablet} {
    padding: 10px 30px 20px;

    li {
      div {
        gap: 12px;
      }
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
