import React from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox() {
  const alert = () => {
    console.log("click!!!");
  };
  return (
    <label className="checkbox">
      <input type="checkbox" onChange={alert} />
      <span className="checkbox-switch"></span>
      <p className="checkbox__name">Короткометражки</p>
    </label>
  );
}
