import { Project } from '../component/project/project';
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import hokurikucar from "../../public/hokurikucar.png";
import barMomo from "../../public/bar_momo.png";
import './page.scss';

export default function Works() {
  return (
    <>
      <Header />
      <div className="works">
        <h1>Works</h1>
        <div className="works__portfolio">
          <Project
            title="メディアサイトの運用支援"
            description="地元に根付いたメディアサイトや情報発信などを支援いたします。過去の実績として、suncat氏が運営する北陸のドライブスポットや車に関するお役立ち情報を発信するWebサイトの運用をお手伝いしています。主にSNSを通した広報活動の自動化を担当しています。"
            imageSrc={hokurikucar}
            link="https://hokurikucar.com/"
          />
          <Project
            title="店舗サイトの作成"
            description="お店の Web サイトを作成することが出来ます。過去の実績として、墨田区押上にある WHISKY BAR MOMO さんのホームページを手掛けました。店舗の情報を掲載しており、レスポンシブデザインでスマートフォンやタブレットでも快適に閲覧できます。"
            imageSrc={barMomo}
            link="https://whisky-bar-momo.com/"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}