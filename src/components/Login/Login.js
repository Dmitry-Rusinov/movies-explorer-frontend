import React from "react";
import "./Login.css";
import headerLogo from "../../images/headerLogo.svg";
import { Link } from "react-router-dom";

export default function Login() {
  const user = {
    name: "Виталий",
    email: "pochta@yandex.ru",
  };
  return (
    <form className="login-form">
      <img
        alt="Логотип"
        src={headerLogo}
        style={{ width: 38 }}
        className="login-form__logo"
      />
      <h4 className="login-form__greeting">Рады видеть!</h4>
      <fieldset
        className="login-form__input-container"
        style={{ marginBottom: 158 }}
      >
        <label className="login-form__input">
          <span className="login-form__input-name">E-mail</span>
          <input
            className="login-form__input-value"
            type="text"
            value={user.email}
            placeholder="xxx@xxx.com"
            required
          />
          <span className="login-form__error">какая то ошибка</span>
        </label>
        <label className="login-form__input">
          <span className="login-form__input-name">Пароль</span>
          <input
            className="login-form__input-value"
            type="text"
            value={[]}
            placeholder="xxxxxxxx"
            required
          />
          <span className="login-form__error"></span>
        </label>
      </fieldset>
      <button className="login-form__button" type="button">
        Войти
      </button>
      <div className="login-form__login-block">
        <p className="login-form__link" style={{ color: "#A0A0A0" }}>
          Еще не зарегистрированы?&nbsp;&nbsp;
        </p>
        <Link to="/signup" className="login-form__link">
          Регистрация
        </Link>
      </div>
    </form>
  );
}
