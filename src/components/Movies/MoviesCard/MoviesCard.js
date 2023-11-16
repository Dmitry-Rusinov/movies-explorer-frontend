import React from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

export default function MoviesCard({ card }) {
  const location = useLocation().pathname;
  return (
    <div className="card">
      <img src={card.link} alt={card.name} className="card__picture" />
      <button
        type="button"
        title="Кнопка сохранения карточки"
        className={
          location === "/movies"
            ? "card__button-save" || "card__button-saved"
            : "card__button-delete"
        }
      ></button>
      <div className="card__description">
        <div className="card__container">
          <h2 className="card__title">{card.name}</h2>
          <span className="card__duration">{card.duration}</span>
        </div>
      </div>
    </div>
  );
}
