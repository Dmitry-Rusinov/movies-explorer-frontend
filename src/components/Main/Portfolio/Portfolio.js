import React from "react";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <article className="portfolio">
      <h4 className="portfolio__text">Портфолио</h4>
      <ul className="portfolio__list">
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/Dmitry-Rusinov/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          <span>↗</span>
          </a>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://dmitry-rusinov.github.io/russian-travel/"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          <span>↗</span>
          </a>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://mesto-rus.students.nomoredomainsrocks.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          <span>↗</span>
          </a>
        </li>
      </ul>
    </article>
  );
}
