import './page.scss';
import { Header } from "../component/header/header";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact">
        <h1>Contact</h1>
        <div className="contact__content">
          <p>お問い合わせは<br />以下のメールアドレスまでお願いいたします。</p>
          <a href="mailto:ryusakine0507@gmail.com">ryusakine0507@gmail.com</a>
        </div>
      </div>
    </>
  );
}