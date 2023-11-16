import React from "react";
import "./Techs.css";

export default function Techs() {
  return (
    <article className="techs" id="techs">
      <h3 className="techs__text">Технологии</h3>
      <span className="techs__line"></span>
      <h4 className="techs__text-head">7 технологий</h4>
      <p className="techs__text-descript">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__technology-list">
        <li className="techs__technology">HTML</li>
        <li className="techs__technology">CSS</li>
        <li className="techs__technology">JS</li>
        <li className="techs__technology">React</li>
        <li className="techs__technology">Git</li>
        <li className="techs__technology">Express.js</li>
        <li className="techs__technology">mongoDB</li>
      </ul>
    </article>
  );
}
