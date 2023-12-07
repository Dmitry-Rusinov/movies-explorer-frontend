import React, { useEffect } from "react";
import "./FilterCheckbox.css";
import { useLocation } from "react-router-dom";

export default function FilterCheckbox({
  checkBox,
  checkBoxStatus,
  checkBoxStatusSavedMovies,
}) {
  const location = useLocation();
  const handleChange = () => {
    location.pathname === "/movies" ? checkBoxStatus() : checkBoxStatusSavedMovies();
  };

  return (
    <label className="checkbox"> 
      <input type="checkbox" onChange={handleChange} checked={checkBox} />
      <span className="checkbox-switch"></span>
      <p className="checkbox__name">Короткометражки</p>
    </label>
  );
}
