import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./FilterCheckbox.css";

export default function FilterCheckbox({
  movies,
  checkBox,
  checkFilterMovie,
  saveMoviesList,
}) {
  const [isState, setIsState] = useState(checkBox);
  const location = useLocation();

  const handleChange = () => {
    if (location.pathname === "/movies") {
      setIsState(!checkBox);
      checkFilterMovie(movies, isState);
    }
    if (location.pathname === "/saved-movies") {
      setIsState(!checkBox);
      checkFilterMovie(saveMoviesList, isState);
    }
  };

  return (
    <label className="checkbox">
      <input type="checkbox" onClick={handleChange} checked={isState} />
      <span className="checkbox-switch"></span>
      <p className="checkbox__name">Короткометражки</p>
    </label>
  );
}
