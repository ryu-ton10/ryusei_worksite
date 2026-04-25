'use client';
import { useState } from 'react';
import './header.scss';

export function Header() {

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
        <input type="checkbox" id="menu-toggle" hidden />
        <label className="header__hamburger" htmlFor="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div className="header__overlay"></div>

        <div className="header__mobile-menu">
          <a href="/about">About</a>
          <a href="/portfolio">Portfolio</a>
          <a href="/works">Works</a> 
          <a href="/contact">Contact</a> 
        </div>
      </header>
    </>
  );
}