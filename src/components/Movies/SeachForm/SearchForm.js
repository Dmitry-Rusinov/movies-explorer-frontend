import { useEffect } from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormValidation } from "../../../utils/hooks/useFormValidation";
import { useLocation } from "react-router-dom";

export default function SearchForm({
  onSearch,
  movieReq,
  saveMovieReq,
  checkBox,
  checkBoxStatus,
  checkBoxStatusSavedMovies,
  onSearchSaveMovies,
  setUserNotification,
}) {
  const { values, handleChange } = useFormValidation();
  const location = useLocation();

  const handleSubmitMoviesPage = (e) => {
    e.preventDefault();
    movieReq = values.movie;
    onSearch(movieReq, checkBox);
  };

  const handleSubmitSavedMoviesPage = (e) => {
    e.preventDefault();
    saveMovieReq = values.savedMovie;
    onSearchSaveMovies(saveMovieReq, checkBox);
  };

  useEffect(() => {
    let request = localStorage.getItem("request");
    if (!request && location.pathname === "/movies") {
      setUserNotification("");
      return;
    }
    if (location.pathname === "/movies") {
      movieReq = values.movie || request;
      onSearch(movieReq, checkBox);
    }
    if (location.pathname === "/saved-movies") {
      saveMovieReq = values.savedMovie || "";
      onSearchSaveMovies(saveMovieReq, checkBox);
    }
  }, [checkBox, location]);

  useEffect(() => {
    let request = localStorage.getItem("request");
    location.pathname === "/movies"
      ? (values.movie = request)
      : (values.movie = "");
  }, [location]);

  return (
    <>
      {location.pathname === "/movies" && (
        <section className="search">
          <form
            className="search__form"
            onSubmit={handleSubmitMoviesPage}
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
            checkBoxStatus={checkBoxStatus}
            submitOnCheckbox={handleSubmitMoviesPage}
          />
        </section>
      )}
      {location.pathname === "/saved-movies" && (
        <section className="search">
          <form
            className="search__form"
            onSubmit={handleSubmitSavedMoviesPage}
            onChange={handleChange}
          >
            <span className="search__icon"></span>
            <input
              type="text"
              className="search__input"
              placeholder="Фильм"
              required
              name="savedMovie"
              value={values.savedMovie || ""}
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
            checkBoxStatusSavedMovies={checkBoxStatusSavedMovies}
            submitOnCheckboxSavedMoviesPage={handleSubmitSavedMoviesPage}
          />
        </section>
      )}
      <span className="search__back-line"></span>
    </>
  );
}
