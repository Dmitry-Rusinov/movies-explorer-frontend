import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SeachForm from "../Movies/SeachForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import Footer from "../Footer/Footer";

export default function SavedMovies({
  loggedIn,
  saveMoviesList,
  isLoading,
  onSearch,
  movies,
  movieReq,
  onDeleteMovies,
  checkBox,
  checkBoxStatusSavedMovies,
  onSearchSaveMovies
}) {
  return (
    <section className="saved-movies">
      <Header loggedIn={loggedIn} />
      <SeachForm
        onSearch={onSearch}
        movieReq={movieReq}
        checkBox={checkBox}
        checkBoxStatusSavedMovies={checkBoxStatusSavedMovies}
        onSearchSaveMovies={onSearchSaveMovies}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          saveMoviesList={saveMoviesList}
          onDeleteMovies={onDeleteMovies}
        />
      )}
      <div className="saved-movies__block"></div>
      <Footer />
    </section>
  );
}
