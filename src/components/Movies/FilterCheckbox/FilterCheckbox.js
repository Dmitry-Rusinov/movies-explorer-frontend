import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox({
  checkBox,
  checkBoxStatus,
}) {

  const handleChange = () => {
      checkBoxStatus();
  };

  return (
    <label className="checkbox"> 
      <input type="checkbox" onChange={handleChange} checked={checkBox} />
      <span className="checkbox-switch"></span>
      <p className="checkbox__name">Короткометражки</p>
    </label>
  );
}
