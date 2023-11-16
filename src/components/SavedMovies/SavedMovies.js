import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SeachForm from "../Movies/SeachForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function SavedMovies({ loggedIn }) {
  return (
    <section className="saved-movies">
      <Header loggedIn={!loggedIn} />
      <SeachForm />
      <MoviesCardList />
      <div className="saved-movies__block"></div>
      <Footer />
    </section>
  );
}
