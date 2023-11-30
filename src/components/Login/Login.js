import React from "react";
import "./Login.css";
import headerLogo from "../../images/headerLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFormValidation } from "../../utils/hooks/useFormValidation";

export default function Login({ handleLogin, message, loggedIn }) {
  const { errors, values, isValid, handleChange } = useFormValidation();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    handleLogin(values.email, values.password);
  }
  return (
    <>
    {!loggedIn ? (<form
      onSubmit={handleSubmit}
      onChange={handleChange}
      className="login-form"
    >
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
            type="email"
            id="user-email"
            minLength="2"
            maxLength="40"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            placeholder="xxx@xxx.com"
            required
          />
          <span className="login-form__error">{errors.email}</span>
        </label>
        <label className="login-form__input">
          <span className="login-form__input-name">Пароль</span>
          <input
            className="login-form__input-value"
            type="text"
            id="user-password"
            minLength="4"
            maxLength="12"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
            placeholder="Введите пароль"
            required
          />
          <span className="login-form__error">{errors.password}</span>
        </label>
      </fieldset>
      <span className="login-form__error">{message}</span>
      <button className="login-form__button" type="submit" disabled={!isValid}>
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
    </form>) : navigate("/", { replace: true })}
    </>
  );
}
