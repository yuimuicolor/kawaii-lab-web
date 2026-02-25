import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { media } from "../../styles/media";

export const HeaderWrap = styled.header`
  width: 100%;
  height: 120px;
  position: fixed;
  top: 0;
  z-index: 999;
  background: rgba(256, 256, 256, 0.7);
  transition: 0.3s ease-in-out;
  border-radius: 0 0 100px 100px;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(256, 256, 256, 1);
  }

  ${media.tablet} {
    height: 100px;
    border-radius: 0 0 80px 80px;
  }

  ${media.mobile} {
    height: 80px;
    border-radius: 0 0 60px 60px;
  }
`;

export const Inner = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 0 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.tablet} {
    padding: 0 40px;
  }

  ${media.mobile} {
    padding: 0 24px;
  }

`;

export const Logo = styled(NavLink)`
  display: block;

  img {
    height: 80px;
    display: block;
  }

  ${media.tablet} {
    img {
      height: 60px;
    }
  }

  ${media.mobile} {
    img {
      height: 32px;
    }
  }
`;

export const Gnb = styled.nav`
  display: flex;
  gap: 32px;

  ${media.tablet} {
    gap: 20px;
  }

  ${media.mobile} {
    gap: 12px;
  }

`;

export const GnbItem = styled(NavLink)`
  font-family: "Afacad", sans-serif;
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.08em;

  color: #222;
  opacity: 0.6;
  transition: opacity 0.2s ease;

  &.active {
    opacity: 1;
    font-weight: 700;
  }

  &:hover {
    opacity: 1;
    font-weight: 700;
  }

  ${media.tablet} {
    font-size: 18px;
  }

  ${media.mobile} {
    font-size: 14px;
  }
`;
