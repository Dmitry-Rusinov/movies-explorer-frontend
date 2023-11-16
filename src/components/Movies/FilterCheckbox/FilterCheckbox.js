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
      <label className="checkbox__name">Короткометражки</label>
    </label>
  );
}
