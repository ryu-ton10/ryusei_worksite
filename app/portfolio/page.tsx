import './page.scss';
import { Project } from '../component/project/project';
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import si14 from "../../public/si14_website.png";
import kokon from "../../public/kokon_website.png";
import kayanoau from "../../public/kayanoau_website.png";
import pokemonTribeRateSearcher from "../../public/pokemon_tribe_rate_searcher.png";
import makaseteChoice from "../../public/makasete_choice.png";

export default function Portfolio() {
  return (
    <>
      <Header />
      <div className="portfolio">
        <h1>Portfolio</h1>
        <div className="portfolio__projects">
          <Project
            title="写真サークル 珪素光画"
            description="日常の風景を写真に収めることを目的としたサークル「珪素光画」の公式サイトです。サークルの活動内容やメンバーの紹介、撮影した写真のギャラリーなどを掲載しています。また、サークルへの参加方法やお問い合わせ先も記載されております。"
            imageSrc={si14}
            link="https://keiso-kouga.netlify.app/"
          />
          <Project
            title="ここんのかくれが"
            description="バーチャル YouTuber 杞憂火狐今さんのファンサイトです。彼のビジュアルや配信スケジュールなどを確認することが出来ます。また、過去のコラボ配信のアーカイブも掲載されております。"
            imageSrc={kokon}
            link="https://kiyubi-kokon.netlify.app/"
          />
          <Project
            title="KayanoAU 公式サイト"
            description="インターネットで活動している KayanoA と茅野ユウのオフィシャルサイトです。主な活動内容の紹介や、グッズや LINE スタンプの販売ページにもアクセスすることが出来ます。また、彼らの Twitter や YouTube チャンネルへのリンクも掲載されております。"
            imageSrc={kayanoau}
            link="https://kayanoau.netlify.app/"
          />
          <Project
            title="ポケモン種族値サーチ"
            description="ポケモン剣盾シリーズに登場するポケモンの種族値を検索するWebアプリです。ランクマッチなどで意表を突くポケモン選出に当たった時、「このポケモン何の能力が強かったっけ…？」という時に役立ちます。ポケモンの名前を入力するだけでHP・こうげき・ぼうぎょ・とくこう・とくぼう・すばやさ・合計値を瞬時に表示することが出来ます。"
            imageSrc={pokemonTribeRateSearcher}
            link="https://pokemon-tribe-rate-searcher.netlify.app/"
          />
          <Project
            title="まかせてチョイス"
            description="友達と遊んでいる時、グループワークを始めたい時、ゲームを始める時、授業で演習を始める時など、グループ分けが必要なシチュエーションが多くあります。そんな時、ランダムでグループを振り分けてくれるのが「まかせてチョイス」です。メンバーとグループ数を入力するだけで簡単にグループ分けをすることが出来ます。"
            imageSrc={makaseteChoice}
            link="https://apps.apple.com/us/app/%E3%81%BE%E3%81%8B%E3%81%9B%E3%81%A6%E3%83%81%E3%83%A7%E3%82%A4%E3%82%B9/id1513168700"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}