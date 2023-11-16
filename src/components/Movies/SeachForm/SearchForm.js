import React from "react";
import "./SeachForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SeachForm() {
  return (
    <>
      <section className="seach">
        <form className="seach__form">
          <span className="seach__icon"></span>
          <input type="text" className="seach__input" placeholder="Фильм" />
          <div className="seach__block">
            <button type="submit" className="seach__submit">
              Найти
            </button>
          </div>
        </form>
        <FilterCheckbox />
      </section>
      <span className="seach__back-line"></span>
    </>
  );
}
