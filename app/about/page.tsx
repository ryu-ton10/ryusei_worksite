import './page.scss';
import Image from "next/image";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import profileImage from "../../public/profile_picture.jpg";
import xLogo from "../../public/x_logo.png";
import githubLogo from "../../public/github_logo.png";

export default function About() {
  return (
    <>
      <Header />
      <div className="about">
        <h1>About</h1>
        <div className="about__profile">
          <div className="about__profile-image-container">
            <Image
              src={profileImage}
              alt="Profile Image"
              className="about__profile-image"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="about__profile-details">
            <p className="about__profile-name">Ryusei Nomi</p>
            <p className="about__profile-title">Web Developer</p>
            <div className="about__profile-social">
              <div className="about__profile-social-x">
                <a href="https://x.com/skn_ton10_v1" target="_blank" rel="noopener noreferrer">
                  <Image
                    fill
                    src={xLogo}
                    alt="X Logo"
                    className="about__profile-x-logo"
                    style={{ objectFit: 'contain' }}
                  />
                </a>
              </div>
              <div className="about__profile-social-github">
                <a href="https://github.com/ryu-ton10" target="_blank" rel="noopener noreferrer">
                  <Image
                    fill
                    src={githubLogo}
                    alt="GitHub Logo"
                    className="about__profile-github-logo"
                    style={{ objectFit: 'contain' }}
                  />
                </a>
              </div>
            </div>
            <p className="about__profile-bio">
              金沢市でエンジニアをやっております。主にWebアプリのフロントエンド周りを触っています。
              ホームページ制作などが得意で、店舗のホームページ制作や、個人のポートフォリオサイトなども制作してきました。
              また、YouTubeやSpotifyなどで技術系のコンテンツも発信しています。<br></br>
            </p>
            <a className="about__profile-resume" href="https://www.resume.id/27ma4_tonto" target="_blank" rel="noopener noreferrer">Resume</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}