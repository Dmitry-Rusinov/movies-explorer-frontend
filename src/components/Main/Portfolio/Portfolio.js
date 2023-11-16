import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__text">Портфолио</h4>
      <ul className="portfolio__list">
        <li className="portfolio__block">
          <a
            className="portfolio__link"
            href="https://github.com/Dmitry-Rusinov/how-to-learn"
          >
            Статичный сайт
          </a>
          <span className="portfolio__arrow">↗</span>
        </li>
        <li className="portfolio__block">
          <a
            className="portfolio__link"
            href="https://dmitry-rusinov.github.io/russian-travel/"
          >
            Адаптивный сайт
          </a>
          <span className="portfolio__arrow">↗</span>
        </li>
        <li className="portfolio__block">
          <a
            className="portfolio__link"
            href="https://mesto-rus.students.nomoredomainsrocks.ru/"
          >
            Одностраничное приложение
          </a>
          <span className="portfolio__arrow">↗</span>
        </li>
      </ul>
    </section>
  );
}
