import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Navigation.css";
import { SCREEN_MD } from "../../utils/Const/Constants";

export default function Navigation({ loggedIn, onSignOut }) {
  const location = useLocation().pathname;
  const notDefaultRoute = useLocation().pathname !== "/";
  const navButtonClassName = `${
    loggedIn ? "nav__button-profile" : "nav__button-profile-promo"
  } ${notDefaultRoute && "nav__button-profile-promo"}`;

  const [width, setWidth] = React.useState(window.innerWidth);

  return (
    <Routes>
      {loggedIn ? (
        <Route
          path="/"
          element={
            <>
              <input
                type="checkbox"
                className="burger-shower"
                id="hamburger-input"
              />
              <label className="nav__container" for="hamburger-input">
                <nav className="nav__links">
                  <button type="button" className="nav__links-close"></button>
                  <Link
                    to="/"
                    className={
                      location === ("/" && width <= SCREEN_MD)
                        ? "nav__main-link_active"
                        : "nav__main-link"
                    }
                  >
                    Главная
                  </Link>
                  <Link
                    to="/movies"
                    className={
                      location === "/movies"
                        ? "nav__main-link_active"
                        : "nav__main-link"
                    }
                  >
                    Фильмы
                  </Link>
                  <Link
                    to="/saved-movies"
                    className={
                      location === "/saved-movies"
                        ? "nav__main-link_active"
                        : "nav__main-link"
                    }
                  >
                    Сохранённые фильмы
                  </Link>
                  <div className="nav__profile-block" for="hamburger-input">
                    <Link to="/profile" className="nav__profile-link">
                      Аккаунт
                    </Link>
                    <Link className={navButtonClassName} to="/profile"></Link>
                  </div>
                </nav>
              </label>
              <div className="overlay"></div>
            </>
          }
        />
      ) : (
        <Route
          path="/"
          element={
            <div className="nav__block">
              <nav className="nav__block-links">
                <Link to="/signup" className="nav__link">
                  Регистрация
                </Link>
              </nav>
              <Link
                onClick={onSignOut}
                to="/signin"
                className="nav__button-auth"
              >
                Войти
              </Link>
            </div>
          }
        />
      )}
    </Routes>
  );
}
