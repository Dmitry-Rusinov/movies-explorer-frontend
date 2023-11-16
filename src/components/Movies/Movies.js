import React from "react";
import "./Movies.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "./SeachForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

export default function Movies({ loggedIn }) {
  return (
    <section className="movies">
      <Header loggedIn={!loggedIn} />
      <SearchForm />
      <MoviesCardList />
      <div className="movies__block">
        <button type="button" className="movies__button-add-cards">
          Ещё
        </button>
      </div>
      <Footer />
    </section>
  );
}
