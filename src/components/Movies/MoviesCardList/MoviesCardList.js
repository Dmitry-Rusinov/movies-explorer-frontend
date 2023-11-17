import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import cards from "../MoviesCard/cards.js";
import { useLocation } from "react-router-dom";

export default function MoviesCardList() {
  const moviesPage = useLocation();
  return (
    <section className="movies__list">
      <ul className="movies__container">
        {cards.slice(0, 8).map((data) => {
          return (
            <li key={data.id}>
              <MoviesCard card={data} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
