import './page.scss';
import Script from "next/script";
import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="contact">
        <h1>Contact</h1>
        <div className="contact__content">
          <Script src="https://sdk.form.run/js/v2/embed.js" />
          <div
            className="formrun-embed"
            data-formrun-form="@ryusakine--LQwwiKrEsdByAHYMW4yy"
            data-formrun-redirect="true"
          >
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}