import './page.scss';
import { Project } from '../component/project';
import barMomo from "../../public/bar_momo.png";
import pokemonTribeRateSearcher from "../../public/pokemon_tribe_rate_searcher.png";
import makaseteChoice from "../../public/makasete_choice.png";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio__projects">
        <Project
          title="WHISKY BAR MOMO"
          description="墨田区押上にあるバーのオフィシャルサイトです。店舗の情報を掲載しており、レスポンシブデザインでスマートフォンやタブレットでも快適に閲覧できます。"
          imageSrc={barMomo}
          link="https://whisky-bar-momo.com/"
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
  );
}