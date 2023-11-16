import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="footer__descript">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
      </div>
      <div className="footer__links">
        <p className="footer__text">©&thinsp;2023</p>
        <nav className="footer__nav-block">
          <a className="footer__text" href="https://practicum.yandex.ru/">
            Яндекс.Практикум
          </a>
          <a className="footer__text" href="https://github.com/">
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}
