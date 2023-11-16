import React from "react";
import "./Register.css";
import headerLogo from "../../images/headerLogo.svg";
import { Link } from "react-router-dom";

export default function Register() {
  const user = {
    name: "Виталий",
    email: "pochta@yandex.ru",
  };
  return (
    <form className="register-form">
      <img
        alt="Логотип"
        src={headerLogo}
        style={{ width: 38 }}
        className="register-form__logo"
      />
      <h4 className="register-form__greeting">Добро пожаловать!</h4>
      <fieldset className="register-form__input-container">
        <label className="register-form__input">
          <p className="register-form__input-name">Имя</p>
          <input
            className="register-form__input-value"
            type="text"
            value={user.name}
            required
          />
          <span className="register-form__error"></span>
        </label>
        <label className="register-form__input">
          <p className="register-form__input-name">E-mail</p>
          <input
            className="register-form__input-value"
            type="text"
            value={user.email}
            required
          />
          <span className="register-form__error"></span>
        </label>
        <label className="register-form__input">
          <p className="register-form__input-name">Пароль</p>
          <input
            className="register-form__input-value"
            type="text"
            value={"••••••••••••••"}
            required
          />
          <span className="register-form__error">Что-то пошло не так...</span>
        </label>
      </fieldset>
      <button className="register-form__button" type="button">
        Зарегистрироваться
      </button>
      <div className="register-form__login-block">
        <p className="register-form__link" style={{ color: "#A0A0A0" }}>
          Уже зарегистрированы?&nbsp;&thinsp;
        </p>
        <Link to="/signin" className="register-form__link">
          Войти
        </Link>
      </div>
    </form>
  );
}
