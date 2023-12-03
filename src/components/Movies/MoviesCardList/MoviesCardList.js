import { React, useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useResize } from "../../../utils/hooks/useResize";
import { useLocation } from "react-router-dom";

export default function MoviesCardList({
  movies,
  onSaveMovies,
  saveMoviesList,
  onDeleteMovies,
  onChangeSaveButton,
}) {
  const { width, isScreenLg, isScreenMd, isScreenSm } = useResize();
  const [moviesQty, setMoviesQty] = useState(movies);
  const location = useLocation();
  let moviesListChanged = (movies.length <= moviesQty.length);

  const handleChange = () => {
    if (width > isScreenLg) {
      setMoviesQty(movies.slice(0, moviesQty.length + 3));
    } else {
      setMoviesQty(movies.slice(0, moviesQty.length + 2));
    }
  };

  const checkingCardSave = (movieList, movie) => {
    return movieList.find((data) => {
      return data.movieId === (movie.id || movie.movieId);
    });
  };

  useEffect(() => {
    if (isScreenSm) {
      setMoviesQty(movies.slice(0, 5));
    }
    if (isScreenMd) {
      setMoviesQty(movies.slice(0, 8));
    }
    if (isScreenLg) {
      setMoviesQty(movies.slice(0, 12));
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
