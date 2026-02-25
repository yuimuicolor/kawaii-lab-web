import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
`;

export const Inner = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 0 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(NavLink)`
  display: block;

  img {
    height: 80px;
    display: block;
  }
`;

export const Gnb = styled.nav`
  display: flex;
  gap: 32px;
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
`;
