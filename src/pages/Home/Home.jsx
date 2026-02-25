import {
  HomeLogoSection,
  BannerSection,
  BannerTrack,
  BannerItem,
  NoticeSection,
  NoticeWrap,
  NoticeInner,
  NoticeHeader,
  NoticeList,
  MoreLink,
} from "./Home.styles";

import mainLogo from "../../assets/img/kawaiilab_logo.png";
import circle from "../../assets/img/icon_circle_999.png";

import banner1 from "../../assets/img/artist_fz.jpg";
import banner2 from "../../assets/img/artist_cs.jpg";
import banner3 from "../../assets/img/artist_ct.jpg";
import banner4 from "../../assets/img/artist_ms.jpeg";
import banner5 from "../../assets/img/artist_ss.jpg";
import banner6 from "../../assets/img/disco_1.jpeg";

const noticeList = [
  { id: 1, title: "공지사항 1", date: "2026.02.24" },
  { id: 2, title: "공지사항 2", date: "2026.02.23" },
  { id: 3, title: "공지사항 3", date: "2026.02.20" },
  { id: 4, title: "공지사항 4", date: "2026.02.18" },
  { id: 5, title: "공지사항 5", date: "2026.02.03" },
  { id: 6, title: "공지사항 6", date: "2026.02.01" },
];
const banners = [banner1, banner2, banner3, banner4, banner5, banner6];

const Home = () => {
  return (
    <>
      <HomeLogoSection>
        <img src={mainLogo} alt="Kawaii Lab" />
      </HomeLogoSection>

      <NoticeSection>
        <NoticeWrap>
          <NoticeInner>
            <NoticeHeader>
              <h2>NOTICE</h2>
              <MoreLink to="/notice">
                <span>More →</span>
              </MoreLink>
            </NoticeHeader>

            <NoticeList>
              {noticeList.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={circle} alt="circle" />
                    <p>{item.title}</p>
                  </div>
                  <span>{item.date}</span>
                </li>
              ))}
            </NoticeList>
          </NoticeInner>
        </NoticeWrap>
      </NoticeSection>

      <BannerSection>
        <BannerTrack to="/artists">
          {[...banners, ...banners].map((img, idx) => (
            <BannerItem key={idx}>
              <img src={img} alt="" />
            </BannerItem>
          ))}
        </BannerTrack>
      </BannerSection>
    </>
  );
};

export default Home;
