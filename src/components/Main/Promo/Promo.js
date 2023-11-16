import React from "react";
import Header from "../../Header/Header";
import "./Promo.css";
import promoLogo from "../../../images/Promo_landing-logo.png";

export default function Promo({ loggedIn }) {
  return (
    <section className="promo__section">
      {<Header loggedIn={loggedIn} />}
      <div className="promo">
        <img
          className="promo__logo"
          src={promoLogo}
          alt="Логотип секции Промо"
        />
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
      </div>
    </section>
  );
}
