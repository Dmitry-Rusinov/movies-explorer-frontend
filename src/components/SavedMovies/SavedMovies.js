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
  checkFilterMovie,
  filterMovies,
  checkBox,
}) {
  return (
    <section className="saved-movies">
      <Header loggedIn={loggedIn} />
      <SeachForm
        onSearch={onSearch}
        movieReq={movieReq}
        checkFilterMovie={checkFilterMovie}
        saveMoviesList={saveMoviesList}
        checkBox={checkBox}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          saveMoviesList={saveMoviesList}
          onDeleteMovies={onDeleteMovies}
          filterMovies={filterMovies}
          checkBox={checkBox}
        />
      )}
      <div className="saved-movies__block"></div>
      <Footer />
    </section>
  );
}
