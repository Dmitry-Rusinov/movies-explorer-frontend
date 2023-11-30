import { useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormValidation } from "../../../utils/hooks/useFormValidation";
import { useLocation } from "react-router-dom";

export default function SearchForm({
  onSearch,
  movieReq,
  movies,
  checkBox,
  checkFilterMovie,
  saveMoviesList,
}) {
  const { values, handleChange } = useFormValidation();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    movieReq = values.movie;
    onSearch(movieReq, checkBox);
  };

  useEffect(() => {
    values.movie = movieReq;
  }, [movieReq]);

  return (
    <>
      {location.pathname === "/movies" && (
        <section className="search">
          <form
            className="search__form"
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            <span className="search__icon"></span>
            <input
              type="text"
              className="search__input"
              placeholder="Фильм"
              required
              name="movie"
              value={values.movie || ""}
              onChange={handleChange}
            />
            <div className="search__block">
              <button type="submit" className="search__submit">
                Найти
              </button>
            </div>
          </form>
          <FilterCheckbox
            checkBox={checkBox}
            movies={movies}
            checkFilterMovie={checkFilterMovie}
            saveMoviesList={saveMoviesList}
          />
        </section>
      )}
      {location.pathname === "/saved-movies" && (
        <section className="search">
          <form
            className="search__form"
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            <span className="search__icon"></span>
            <input
              type="text"
              className="search__input"
              placeholder="Фильм"
              required
              name="movie"
              value={values.movie || ""}
              onChange={handleChange}
            />
            <div className="search__block">
              <button type="submit" className="search__submit">
                Найти
              </button>
            </div>
          </form>
          <FilterCheckbox
            checkBox={checkBox}
            movies={movies}
            checkFilterMovie={checkFilterMovie}
            saveMoviesList={saveMoviesList}
          />
        </section>
      )}
      <span className="search__back-line"></span>
    </>
  );
}
