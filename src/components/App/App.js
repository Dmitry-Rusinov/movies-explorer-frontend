import React from "react";
import { Routes, Route } from "react-router-dom";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFoundError from "../NotFoundError/NotFoundError";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path="*" element={<NotFoundError />} />
            <Route path="/" element={<Main loggedIn={loggedIn} />} />
            <Route path="/movies" element={<Movies loggedIn={loggedIn} />} />
            <Route
              path="/saved-movies"
              element={<SavedMovies loggedIn={loggedIn} />}
            />
            <Route path="/profile" element={<Profile loggedIn={loggedIn} />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
          </Routes>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
