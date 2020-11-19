import React from 'react';
import logo from "../logo.svg";

function Header() {
  return (
      <header>
        <a href="index.html" id="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="mailto:hello@johnlandon.design" class="email">
                hello@johnlandon.design
              </a>
            </li>
            <li>
              <a href="work.html">WORK</a>
            </li>
            <li>
              <a href="about.html">ABOUT</a>
            </li>
          </ul>
        </nav>
      </header>
  );
}

export default Header;
