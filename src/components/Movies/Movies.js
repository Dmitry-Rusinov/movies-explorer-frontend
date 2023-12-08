import "./Movies.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import SearchForm from "./SeachForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";

export default function Movies({
  loggedIn,
  isLoading,
  onSearch,
  movies,
  movieReq,
  userNotification,
  onSaveMovies,
  saveMoviesList,
  onDeleteMovies,
  onChangeSaveButton,
  checkBox,
  checkBoxStatus,
  setUserNotification
}) {
  return (
    <section className="movies">
      <Header loggedIn={loggedIn} />
      <SearchForm
        checkBox={checkBox}
        onSearch={onSearch}
        movieReq={movieReq}
        checkBoxStatus={checkBoxStatus}
        setUserNotification={setUserNotification}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          onSaveMovies={onSaveMovies}
          saveMoviesList={saveMoviesList}
          onDeleteMovies={onDeleteMovies}
          onChangeSaveButton={onChangeSaveButton}
        />
      )}
      <span className="movies__user-notification">{userNotification}</span>
      <Footer />
    </section>
  );
}
