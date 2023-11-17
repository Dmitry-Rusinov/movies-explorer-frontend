import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <article className="about-project" id="about-project">
      <h3 className="about-project__text">О проекте</h3>
      <span className="about-project__line"></span>
      <ul className="about-project__info">
        <li className="about-project__info-title">
          Дипломный проект включал 5 этапов
        </li>
        <li className="about-project__info-title">
          На выполнение диплома ушло 5 недель
        </li>
        <li className="about-project__info-text">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </li>
        <li className="about-project__info-text">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </li>
      </ul>
      <div className="about-project__duration">
        <div className="about-project__duration-backend">
          <div className="about-project__duration-course">
            <p className="about-project__duration-week">1 неделя</p>
          </div>
          <div className="about-project__duration-course-name">
            <p className="about-project__course-name">Back-end</p>
          </div>
        </div>
        <div className="about-project__duration-frontend">
          <div className="about-project__duration-course_theme-light">
            <p className="about-project__duration-week about-project__duration-week_theme-dark">
              4 недели
            </p>
          </div>
          <div className="about-project__duration-course-name">
            <p className="about-project__course-name">Front-end</p>
          </div>
        </div>
      </div>
    </article>
  );
}
