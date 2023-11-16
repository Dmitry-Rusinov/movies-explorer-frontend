import React from "react";
import Portfolio from "../Portfolio/Portfolio";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <article className="about-me" id="about-me">
      <h2 className="about-me__text">Студент</h2>
      <span className="about-me__line"></span>
      <section className="about-me__info">
        <div className="about-me__descript">
          <h3 className="about-me__text-head">Дмитрий</h3>
          <h4 className="about-me__text-profession">
            Фронтенд-разработчик, 33 года
          </h4>
          <p className="about-me__text-descript">
            Я родился в городе Каменск-Уральский, но сейчас живу в Краснодаре. У
            меня есть жена, сын и дочь. Я люблю слушать музыку, и смотреть
            позновательные фильмы. Недавно начал кодить. До 2023 года работал
            Главным специалистом по охране труда, промышленной и экологической
            безопасности на нефтегазовых месторождениях. После того, как прошёл
            курс по веб-разработке, начал заниматься фриланс-заказами и поиском
            постоянной работы в новой профессии.
          </p>
          <a
            className="about-me__github-link"
            href="https://github.com/Dmitry-Rusinov"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__foto"
          src="https://images.unsplash.com/photo-1698571262509-5e96d6c64bd1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5NHx8fGVufDB8fHx8fA%3D%3D"
          alt="фотография студента"
        />
      </section>
      <Portfolio />
    </article>
  );
}
