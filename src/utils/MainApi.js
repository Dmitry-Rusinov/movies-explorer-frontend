/* const BASE_URL = "https://api.movie-service.nomoredomainsmonster.ru"; */
export const BASE_URL = "http://localhost:3000";

//проверка ответа
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

//запрос на регистрацию
export const register = ({ name, email, password }) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then(checkResponse)
    .then((data) => data);
};

//запрос на авторизацию
export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(checkResponse)
    .then((data) => {
      localStorage.setItem("userId", data.email);
      return data;
    });
};

//запрос на выход из системы
export const logout = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

//запрос на получение информации о текущем пользователе
export const getInfoByCurrentUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

//запрос на изменение данных пользователя
export const setUserInfo = (data) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then(checkResponse);
};

//запрос на сохранение фильма
export const saveMovie = (movie) => {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: `https://api.nomoreparties.co/${movie.image.url}`,
      trailerLink: movie.trailerLink,
      thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
      movieId: movie.id,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
    }),
  }).then(checkResponse);
};

//запрос на удаление фильма из сохраненных
export const deleteMovie = (cardId) => {
  return fetch(`${BASE_URL}/movies/${cardId}`, {
    method: "DELETE",
    credentials: "include",
  }).then(checkResponse);
};

//запрос на сохраненные фильмы
export const getSaveMoviesList = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};
