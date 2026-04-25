import './page.scss';
import Image from "next/image";
import { Header } from "../component/header/header";
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
              金沢市でエンジニアをやっております。主にWebアプリのバックエンドやモバイルアプリを触っています。<br></br>
              新卒で事業会社に入社し、3年弱ほど少人数チームでQAやAPI設計実装を行っていました。<br></br>
              2020年9月からは個人事業主として仕事を受けています。
            </p>
          </div>
        </div>
      </div>
    </>
  );
}