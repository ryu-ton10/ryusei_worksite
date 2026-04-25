import './page.scss';

export default function Home() {
  return (
    <div className="home">
      <div className="home__title">
        <h1>Ryusei Nomi</h1>
        <h1>A work website</h1>
      </div>
      <div className="home__menu">
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="https://www.resume.id/27ma4_tonto" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="/works">Works</a> 
        <a href="/contact">Contact</a> 
      </div>
    </div>
  );
}
