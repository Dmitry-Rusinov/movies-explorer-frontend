import React from "react";
import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__text">О проекте</h2>
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
            <span className="about-project__duration-week">1 неделя</span>
          </div>
          <div className="about-project__duration-course-name">
            <span className="about-project__course-name">Back-end</span>
          </div>
        </div>
        <div className="about-project__duration-frontend">
          <div className="about-project__duration-course_theme-light">
            <span className="about-project__duration-week about-project__duration-week_theme-dark">
              4 недели
            </span>
          </div>
          <div className="about-project__duration-course-name">
            <span className="about-project__course-name">Front-end</span>
          </div>
        </div>
      </div>
    </section>
  );
}
