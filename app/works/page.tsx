import { Project } from '../component/project';
import hokurikucar from "../../public/hokurikucar.png";
import './page.scss';

export default function Works() {
  return (
    <div className="works">
      <h1>Works</h1>
      <div className="works__portfolio">
        <Project
          title="北陸くるま情報サイト運用支援"
          description="suncat氏が運営する、北陸のドライブスポットや車に関するお役立ち情報を発信するWebサイトの運用をお手伝いしています。主にSNSを通した広報活動の自動化を担当しています。"
          imageSrc={hokurikucar}
          link="https://hokurikucar.com/"
        />
      </div>
    </div>
  );
}