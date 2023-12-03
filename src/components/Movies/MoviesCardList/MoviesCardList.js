import { React, useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useResize } from "../../../utils/hooks/useResize";
import { useLocation } from "react-router-dom";
import {
  BIG_MOVIES_QTY,
  MIDDLE_MOVIES_QTY,
  SMALL_MOVIES_QTY,
  BIG_ADDITIONAL_ROW,
  SMALL_ADDITIONAL_ROW,
  PREV_MOVIES_QTY,
} from "../../../utils/Const/ScreenWidth";

export default function MoviesCardList({
  movies,
  onSaveMovies,
  saveMoviesList,
  onDeleteMovies,
  onChangeSaveButton,
}) {
  const { width, isScreenLg, isScreenMd, isScreenSm, isScreenXSm } = useResize();
  const [moviesQty, setMoviesQty] = useState(movies);
  const location = useLocation();
  let moviesListChanged = movies.length <= moviesQty.length;

  const handleChange = () => {
    if (isScreenLg) {
      setMoviesQty(movies.slice(0, moviesQty.length + BIG_ADDITIONAL_ROW));
    } else {
      setMoviesQty(movies.slice(0, moviesQty.length + SMALL_ADDITIONAL_ROW));
    }
  };

  const checkingCardSave = (movieList, movie) => {
    return movieList.find((data) => {
      return data.movieId === (movie.id || movie.movieId);
    });
  };

  useEffect(() => {
    if (isScreenXSm) {
      setMoviesQty(movies.slice(0, SMALL_MOVIES_QTY));
    }
    if (isScreenSm) {
      setMoviesQty(movies.slice(0, PREV_MOVIES_QTY));
    }
    if (isScreenMd) {
      setMoviesQty(movies.slice(0, MIDDLE_MOVIES_QTY));
    }
    if (isScreenLg) {
      setMoviesQty(movies.slice(0, BIG_MOVIES_QTY));
    }
  }, [movies, width]);

  return (
    <section className="movies__list">
      <ul className="movies__container">
        {(location.pathname === "/movies" ? moviesQty : saveMoviesList).map(
          (data) => {
            return (
              <li key={moviesQty ? data.id : data.movieId}>
                <MoviesCard
                  movie={data}
                  onSaveMovies={onSaveMovies}
                  onDeleteMovies={onDeleteMovies}
                  checkMovieID={checkingCardSave(saveMoviesList, data)}
                  onChangeSaveButton={onChangeSaveButton}
                />
              </li>
            );
          }
        )}
      </ul>
      {location.pathname === "/movies" && (
        <div className="movies__block">
          <button
            type="button"
            className="movies__button-add-cards"
            disabled={moviesListChanged}
            onClick={handleChange}
          >
            Ещё
          </button>{" "}
        </div>
      )}
    </section>
  );
}
