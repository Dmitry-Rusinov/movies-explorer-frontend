import React from "react";
import "./Register.css";
import headerLogo from "../../images/headerLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useFormValidation } from "../../utils/hooks/useFormValidation";

export default function Register({ onRegister, message, loggedIn }) {
  const { errors, values, isValid, handleChange } = useFormValidation();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  }

  return (
    <>
    {!loggedIn ? <form
      className="register-form"
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <Link to="/" style={{ listStyle: "none" }}>
        <img alt="Логотип" src={headerLogo} style={{ width: 38 }} className="register-form__logo" />
      </Link>
      <h4 className="register-form__greeting">Добро пожаловать!</h4>
      <fieldset className="register-form__input-container">
        <label className="register-form__input">
          <span className="register-form__input-name">Имя</span>
          <input
            className="register-form__input-value"
            type="text"
            id="user-name"
            minLength="2"
            maxLength="30"
            name="name"
            value={values.name || ""}
            onChange={handleChange}
            placeholder="Джон Сноу"
            pattern="^[а-яА-Яa-zA-Z\s\-]+$"
            required
          />
          <span className="register-form__error">{errors.name}</span>
        </label>
        <label className="register-form__input">
          <span className="register-form__input-name">E-mail</span>
          <input
            className="register-form__input-value"
            type="email"
           /*  pattern={"/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"} */
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            placeholder="xxx@xxx.com"
            required
          />
          <span className="register-form__error">{errors.email}</span>
        </label>
        <label className="register-form__input">
          <span className="register-form__input-name">Пароль</span>
          <input
            className="register-form__input-value"
            type="password"
            minLength="4"
            maxLength="12"
            name="password"
            value={values.password || ""}
            onChange={handleChange}
            placeholder="xxxxxxxx"
            required
          />
          <span className="register-form__error">{errors.password}</span>
        </label>
      </fieldset>
      <span className="register-form__error">{message}</span>
      <button
        className="register-form__button"
        type="submit"
        disabled={!isValid}
      >
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
    </form> : navigate("/", { replace: true })}
    </>
  );
}
