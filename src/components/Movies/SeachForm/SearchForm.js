import React from "react";
import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
  return (
    <>
      <section className="search">
        <form className="search__form">
          <span className="search__icon"></span>
          <input type="text" className="search__input" placeholder="Фильм" required/>
          <div className="search__block">
            <button type="submit" className="search__submit">
              Найти
            </button>
          </div>
        </form>
        <FilterCheckbox />
      </section>
      <span className="search__back-line"></span>
    </>
  );
}
