import React from "react";
import "./NotFoundError.css";
import { Link } from "react-router-dom";

export default function NotFoundError() {
  const goToBack = () => window.history.go(-3);
  return (
    <section className="not-found">
      <p className="not-found__error">404</p>
      <p className="not-found__text">Страница не найдена</p>
      <Link onClick={goToBack} className="not-found__previose">
        Назад
      </Link>
    </section>
  );
}
