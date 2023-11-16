import React from "react";
import "./NavTab.css";

export default function NavTab() {
  return (
    <nav className="navTab">
      <a className="navTab__link" href="#about-project">
        О проекте
      </a>
      <a className="navTab__link" href="#techs">
        Технологии
      </a>
      <a className="navTab__link" href="#about-me">
        Студент
      </a>
    </nav>
  );
}
