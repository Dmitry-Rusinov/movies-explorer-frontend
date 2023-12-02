import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundError from "../NotFoundError/NotFoundError";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import InfoTooltip from "../infoTooltip/infoTooltip";

import {
  register,
  authorize,
  logout,
  getInfoByCurrentUser,
  setUserInfo,
  saveMovie,
  deleteMovie,
  getSaveMoviesList,
} from "../../utils/MainApi";

import { getMoviesList } from "../../utils/MoviesApi";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState({}); //стейт текущего пользователя
  const [loggedIn, setLoggedIn] = useState(false); //стейт состояния логина
  const [userNotification, setUserNotification] = useState(""); //стейт сообщения пользователя
  const [InfoTooltipOpened, setInfoTooltipOpened] = useState(false); //стейт попапа-уведомления
  const [isConfirm, setIsConfirm] = useState(true); //стейт изображения попапа-уведомления
  const [movies, setMovies] = useState([]); //стейт фильмов главной страницы
  const [saveMovies, setSaveMovies] = useState([]); //стейт сохраненных фильмов
  const [isLoading, setIsLoading] = useState(false); //стейт ожидания ответа от сервера
  const [movieReq, setMovieReq] = useState(""); //стейт текущего поискового запроса
  const [checkBox, setCheckBox] = useState(false); //стейт состояния чекбокса
  const [filterMovies, setFilterMovies] = useState([]); //стейт массива отфильтрованных фильмов

  //проверка регистрации пользователя
  const checkRegistration = ({ name, email, password }) => {
    register({ name, email, password })
      .then(() => {
        handleAutorization(email, password);
        })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
        handleMessage(`${err}, Что-то пошло не так...`);
        handleInfoTooltipClick();
      })
      .finally(() => {
        closeInfoTooltipPopup();
      });
  };

  //проверяем успешна регистрация или нет
  const handleAutorization = (email, password) => {
    authorize(email, password)
      .then(() => {
        setLoggedIn(true);
        Promise.all([getInfoByCurrentUser(), getSaveMoviesList()])
          .then(([user, saveMovieList]) => {
            setCurrentUser(user);
            localStorage.setItem(
              "saveMovieList",
              JSON.stringify(saveMovieList)
            );
            setSaveMovies(saveMovieList);
          })
          .catch((err) => console.log(err));
        handleMessage("");
        setIsLoading(false);
        localStorage.setItem('checkbox', checkBox)
        navigate("/movies", { replace: true });
      })
      .catch((err) => {
        handleMessage(err + `${" Переданы не корректные данные"}`);
        console.log(err);
      });
  };

  //выходим из системы, удаляем куки и очищаем локальное хранилище
  const onSignOut = (e) => {
    e.preventDefault();
    logout()
      .then(() => {
        localStorage.clear();
        setLoggedIn(false);
        navigate("/");
      })
      .catch((err) => console.log(`Ошибка: ${err}`));
  };

  //проверяем есть ли токен у пользователя при загрузке страницы
    const tokenCheck = () => {
    if (localStorage.getItem("userId")) {
      const token = localStorage.getItem("userId");
      if (token) {
        getInfoByCurrentUser()
          .then((res) => {
            if (res) {
              setCurrentUser(res);
              setLoggedIn(true);
            }
          })
          .catch((err) => console.log(`Ошибка: ${err}`));
        getSaveMoviesList()
        .then((data) => {
          localStorage.setItem("saveMovieList", JSON.stringify(data));
          setSaveMovies(data);
        })
        .catch((err) => console.log(`Ошибка: ${err}`));
        navigate(location.pathname);
      } else {
        navigate("/");
      }
    }
  };
  
  useEffect(() => {
    tokenCheck();
  }, []);

  //открываем попап-уведомление
  const handleInfoTooltipClick = () => {
    setInfoTooltipOpened(true);
  };

  //зактываем попап-уведомление
  const closeInfoTooltipPopup = () => {
    setTimeout(() => {
      setInfoTooltipOpened(false);
    }, 2000);
  };

  //устанавливаем сообщение в попап-уведомление
  const handleMessage = (message) => {
    setUserNotification(message);
  };

  //обновляем данные пользователя
  const handleUpdateUser = (userData) => {
    setUserInfo(userData)
      .then((data) => {
        setIsConfirm(true);
        setCurrentUser(data);
        handleMessage("Даные успешно изменены");
        handleInfoTooltipClick();
      })
      .catch((err) => {
        setIsConfirm(false);
        handleMessage("При обновлении профиля произошла ошибка");
        handleInfoTooltipClick();
        console.log(`Ошибка: ${err}`);
      })
      .finally(() => {
        closeInfoTooltipPopup();
      });
  };

  //сохраняем понравившийся фильм
  const handleSaveMovies = (movie) => {
    saveMovie(movie)
      .then((data) => {
        setSaveMovies((saveMovieList) => [...saveMovieList, data]);
        localStorage.setItem(
          "saveMovieList",
          JSON.stringify([...saveMovies, data])
        );
      })
      .catch((err) => console.log(err));
  };

  //удаляем фильм
  const handleDeleteMovies = (movieId) => {
    deleteMovie(movieId)
      .then((movie) => {
        const updateSaveMovieList = saveMovies.filter(
          (data) => movie._id !== data._id
        );
        localStorage.setItem(
          "saveMovieList",
          JSON.stringify(updateSaveMovieList)
        );
        setSaveMovies(updateSaveMovieList);
      })
      .catch((err) => console.log(err));
  };

  //изменение состояния кнопки сохранения фильмов
  const handleChangeButtonSave = (movie) => {
    const checkMovie = saveMovies.find((data) => data.movieId === movie.id);
    const movieId = checkMovie ? checkMovie._id : null;
    if (checkMovie) {
      handleDeleteMovies(movieId);
    } else {
      saveMovie(movie)
        .then((data) => {
          setSaveMovies((saveMoviesList) => [...saveMoviesList, data]);
        })
        .catch((err) => console.log(err));
    }
  };

  //поиск фильмов в массиве по запросу пользователя
  const handleSearchResult = (request, data) => {
    let searchResult = data
      .filter((item) => {
        return (
          item.nameRU.toLowerCase().includes(request.toLowerCase()) ||
          item.nameEN.toLowerCase().includes(request.toLowerCase())
        );
      })
      .sort();
    return searchResult;
  };

  //ищем фильмы по запросу на главной странице
  const handleSearchMoviesPage = (search) => {
    setIsLoading(true);
    setUserNotification("");
    if (location.pathname === "/movies") {
      getMoviesList()
        .then((data) => {
          let result = handleSearchResult(search, data);
          if (result.length === 0) {
            setUserNotification("Ничего не найдено");
            setMovies([]);
          } else {
            setMovies(result);
            setMovieReq(search);
            localStorage.setItem("moviesList", JSON.stringify(result));
            localStorage.setItem("request", search);
          }
        })
        .catch((err) => {
          console.log(err);
          setUserNotification(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  //ищем фильмы по запросу на странице сохраненных фильмов
  const handleSearchSaveMoviesPage = (search) => {
    if (location.pathname === "/saved-movies") {
      setIsLoading(true);
      getSaveMoviesList()
        .then((data) => {
          let result = handleSearchResult(search, data);
          if (result.length === 0) {
            setIsConfirm(false);
            handleMessage("Ничего не найдено");
            handleInfoTooltipClick();
            closeInfoTooltipPopup();
          } else {
            setSaveMovies(result);
            setMovieReq(search);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  //фильтруем фильмы по продолжительности
  const handleFilterMovies = (data, checked) => {
    checked = localStorage.getItem("checkbox");
    let filterArray = data.filter((movie) => movie.duration <= 40);
    if (checked) {
      setCheckBox(!checkBox);
      if (location.pathname === "/movies") {
        setFilterMovies(filterArray);
      }
      if (location.pathname === "/saved-movies") {
        setFilterMovies(filterArray);
      }
      localStorage.setItem("filterArray", JSON.stringify(filterArray));
      localStorage.setItem("checkbox", !checkBox);
      return filterArray;
    } else {
      localStorage.setItem("checkbox", checkBox);
      return data;
    }
  };

  useEffect(() => {
    let request = localStorage.getItem("request");
    if (!request) {
      setUserNotification("");
      return;
    } else if (request) {
      if (location.pathname === "/movies") {
        handleSearchMoviesPage(request);
        setMovieReq(request);
      } else {
        handleSearchSaveMoviesPage(request);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    let saveMoviesList = JSON.parse(localStorage.getItem("saveMovieList"));
    if (saveMoviesList) {
      setSaveMovies(saveMoviesList);
    } else {
      return;
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="*" element={<NotFoundError />} />
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route
              path="/signup"
              element={
                <Register
                  onRegister={checkRegistration}
                  message={userNotification}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  handleLogin={handleAutorization}
                  message={userNotification}
                  loggedIn={loggedIn}
                />
              }
            />
            <Route
              path="/movies"
              element={
                <ProtectedRoute
                  component={Movies}
                  loggedIn={loggedIn}
                  isLoading={isLoading}
                  onSearch={handleSearchMoviesPage}
                  movies={movies}
                  movieReq={movieReq}
                  userNotification={userNotification}
                  onSaveMovies={handleSaveMovies}
                  onDeleteMovies={handleDeleteMovies}
                  saveMoviesList={saveMovies}
                  onChangeSaveButton={handleChangeButtonSave}
                  checkFilterMovie={handleFilterMovies}
                  checkBox={checkBox}
                  filterMovies={filterMovies}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  component={SavedMovies}
                  loggedIn={loggedIn}
                  saveMoviesList={saveMovies}
                  isLoading={isLoading}
                  onSearch={handleSearchSaveMoviesPage}
                  onDeleteMovies={handleDeleteMovies}
                  movies={movies}
                  movieReq={movieReq}
                  checkFilterMovie={handleFilterMovies}
                  filterMovies={filterMovies}
                  checkBox={checkBox}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  component={Profile}
                  loggedIn={loggedIn}
                  onSignOut={onSignOut}
                  onUpdateUser={handleUpdateUser}
                />
              }
            />
          </Routes>
        </div>
        <InfoTooltip
          isConfirm={isConfirm}
          isOpen={InfoTooltipOpened}
          message={userNotification}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
