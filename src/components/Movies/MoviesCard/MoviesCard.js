import { useState } from "react";
import "./MoviesCard.css";
import { Link, useLocation } from "react-router-dom";
import convertMinutesToHourse from "../../../utils/ConvertMinutesToHours";

export default function MoviesCard({
  movie,
  onSaveMovies,
  onDeleteMovies,
  checkMovieID,
  onChangeSaveButton,
}) {
  const location = useLocation();
  const [isCardSaved, setIsCardSaved] = useState(true);

  const handleClickButtonSave = () => {
    onSaveMovies(movie);
    setIsCardSaved(true);
  };

  const handleClickButtonDelete = () => {
    onDeleteMovies(movie._id);
    setIsCardSaved(false);
  };

  const handleClickChangeButton = () => {
    onChangeSaveButton(movie);
  };

  return (
    <section className="card">
      <Link to={movie.trailerLink} style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
      <img
        src={
          location.pathname === "/movies"
            ? `https://api.nomoreparties.co/${movie.image.url}`
            : movie.image
        }
        alt={movie.nameRU || movie.nameEN}
        className="card__picture"
      />
      </Link>
      {location.pathname === "/movies" && checkMovieID && isCardSaved ? (
        <button
          type="button"
          title="Кнопка удаления карточки"
          onClick={handleClickChangeButton}
          className={"card__button-saved"}
        ></button>
      ) : (
        <button
          type="button"
          title="Кнопка сохранения карточки"
          onClick={handleClickButtonSave}
          className={
            location.pathname === "/movies"
              ? "card__button-save"
              : "card__button-save_disabled"
          }
        ></button>
      )}
      {location.pathname === "/saved-movies" && (
        <button
          type="button"
          title="Кнопка удаления карточки"
          onClick={handleClickButtonDelete}
          className="card__button-delete"
        ></button>
      )}
      <div className="card__description">
        <div className="card__container">
          <h2 className="card__title">{movie.nameRU || movie.nameEN}</h2>
          <span className="card__duration">
            {convertMinutesToHourse(movie.duration)}
          </span>
        </div>
      </div>
    </section>
  );
}
