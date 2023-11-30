import React, { useContext, useEffect, useState } from "react";
import "./ProfileForm.css";
import { Link } from "react-router-dom";
import { useFormValidation } from "../../utils/hooks/useFormValidation";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function ProfileForm({ onSignOut, onUpdateUser }) {
  const { errors, values, isValid, handleChange, resetForm } =
    useFormValidation();
  const [isEdit, setIsEdit] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    currentUser ? resetForm(currentUser) : resetForm();
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
    setIsEdit(false);
  }

  const handleChangeUserData = () => {
    setIsEdit(true);
  };

  return (
    <form
      className="profile-form"
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <h4 className="profile-form__greeting">{`Привет, ${currentUser.name}!`}</h4>
      <fieldset className="profile-form__input-container">
        <label className="profile-form__input">
          <span className="profile-form__input-name">Имя</span>
          <input
            className="profile-form__input-value"
            type="text"
            id="user-name"
            minLength="2"
            maxLength="30"
            name="name"
            value={values.name || ""}
            onChange={handleChange}
            placeholder="Имя"
            required
            disabled={!isEdit}
          />
        </label>
        <span className="profile-form__back-line"></span>
        <label className="profile-form__input">
          <span className="profile-form__input-name">E-mail</span>
          <input
            className="profile-form__input-value"
            type="email"
            minLength="2"
            maxLength="40"
            name="email"
            value={values.email || ""}
            onChange={handleChange}
            placeholder="E-mail"
            required
            disabled={!isEdit}
          />
        </label>
      </fieldset>
      {!isEdit ? (
        <>
          <button
            className="profile-form__button"
            type="submit"
            onClick={handleChangeUserData}
          >
            Редактировать
          </button>
          <Link className="profile-form__button" to="/" onClick={onSignOut}>
            Выйти из аккаунта
          </Link>
        </>
      ) : (
        <>
          <span className="profile-form__error">{errors.value}</span>
          <button
            type="submit"
            className="profile-form__button-edit"
            onSubmit={handleSubmit}
            disabled={
              !isValid ||
              (currentUser.name === values.name &&
                currentUser.email === values.email)
            }
          >
            Сохранить
          </button>
        </>
      )}
    </form>
  );
}
