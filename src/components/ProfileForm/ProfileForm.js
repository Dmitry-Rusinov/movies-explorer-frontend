import React from "react";
import "./ProfileForm.css";

export default function ProfileForm() {
  const user = {
    name: "Виталий",
    email: "pochta@yandex.ru",
  };
  return (
    <form className="profile-form">
      <h4 className="profile-form__greeting">{`Привет, ${user.name}!`}</h4>
      <fieldset className="profile-form__input-container">
        <label className="profile-form__input">
          <span className="profile-form__input-name">Имя</span>
          <input
            className="profile-form__input-value"
            type="text"
            value={user.name}
            placeholder="Имя"
            required
          />
        </label>
        <span className="profile-form__back-line"></span>
        <label className="profile-form__input">
          <span className="profile-form__input-name">E-mail</span>
          <input
            className="profile-form__input-value"
            type="text"
            value={user.email}
            placeholder="E-mail"
            required
          />
        </label>
      </fieldset>
      <button className="profile-form__button" type="button">
        Редактировать
      </button>
      <button className="profile-form__button" type="button">
        Выйти из аккаунта
      </button>
    </form>
  );
}
