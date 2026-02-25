import {
  FooterWrap,
  Inner,
  Left,
  Logo,
  Copyright,
  Right,
  FollowTitle,
  SocialList,
  SocialButton,
} from './Footer.styles'

import logo from '../../assets/img/kawaiilab_logo_white.png'
import youtube from '../../assets/img/icon_footer_youtube.png'
import instagram from '../../assets/img/icon_footer_instagram.png'
import tiktok from '../../assets/img/icon_footer_tiktok.png'
import x from '../../assets/img/icon_footer_x.png'

const Footer = () => {
  return (
    <FooterWrap>
      <Inner>
        {/* LEFT */}
        <Left>
          <Logo src={logo} alt="Kawaii Lab" />
          <Copyright>
            © KAWAII LAB. All Rights Reserved.
          </Copyright>
        </Left>

        {/* RIGHT */}
        <Right>
          <FollowTitle>FOLLOW US!</FollowTitle>
          <SocialList>
            <SocialButton href="https://youtube.com" target="_blank">
              <img src={youtube} alt="YouTube" />
            </SocialButton>
            <SocialButton href="https://instagram.com" target="_blank">
              <img src={instagram} alt="Instagram" />
            </SocialButton>
            <SocialButton href="https://tiktok.com" target="_blank">
              <img src={tiktok} alt="TikTok" />
            </SocialButton>
            <SocialButton href="https://x.com" target="_blank">
              <img src={x} alt="X" />
            </SocialButton>
          </SocialList>
        </Right>
      </Inner>
    </FooterWrap>
  )
}

export default Footer