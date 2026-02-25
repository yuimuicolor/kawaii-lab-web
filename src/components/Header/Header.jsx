import {
  HeaderWrap,
  Inner,
  Logo,
  Gnb,
  GnbItem,
} from './Header.styles'
import logo from '../../assets/img/kawaiilab_logo.png'

const Header = () => {
  return (
    <HeaderWrap>
      <Inner>
        <Logo to="/">
          <img src={logo} alt="Kawaii Lab" />
        </Logo>

        <Gnb>
          <GnbItem to="/artists">ARTISTS</GnbItem>
          <GnbItem to="/audition">AUDITION</GnbItem>
          <GnbItem to="/notice">NOTICE</GnbItem>
        </Gnb>
      </Inner>
    </HeaderWrap>
  )
}

export default Header