import styled from "styled-components";

export const FooterWrap = styled.footer`
  background: #4b4b4b;
  color: #fff;
  position: relative;
  z-index: 1;
`;

export const Inner = styled.div`
  margin: 0 60px;
  padding: 60px 0 40px;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

/* 왼쪽 */
export const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Logo = styled.img`
  height: 80px;
  width: auto;
  display: block;
`;

export const Copyright = styled.p`
  font-size: 12px;
  opacity: 0.7;
`;

/* 오른쪽 */
export const Right = styled.div`
  text-align: right;
`;

export const FollowTitle = styled.p`
  font-family: "Afacad", sans-serif;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const SocialList = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const SocialButton = styled.a`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 15px;
  background: #fff;

  img {
    width: 80px;
  }

  transition: transform 0.15s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;
