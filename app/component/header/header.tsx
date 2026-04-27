'use client';
import { useState } from 'react';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export function Header() {

  return (
    <>
      <header className="header">
        <a href="/">
          <FontAwesomeIcon
            icon={faHouse}
            size="2x"
            style={{ color: 'white', height: '100%' }}
          />
        </a>
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