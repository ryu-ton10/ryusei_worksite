'use client';
import { useState } from 'react';
import './header.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <a href="/">Home</a>
        <nav className="header__nav">
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/works">Works</a> 
          <a href="/contact">Contact</a> 
        </nav>
        <div className="header__hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <div className="header__mobile-menu" style={{ display: isMenuOpen ? 'block' : 'none' }}>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/works">Works</a> 
        <a href="/contact">Contact</a> 
      </div>
    </>
  );
}