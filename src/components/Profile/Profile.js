import React from "react";
import Header from "../Header/Header";
import "./Profile.css";
import ProfileForm from "../ProfileForm/ProfileForm";

export default function Profile({ loggedIn, onSignOut, onUpdateUser, isOpen }) {
  return (
    <section className="profile">
      <Header loggedIn={loggedIn} />
      <ProfileForm
        onSignOut={onSignOut}
        onUpdateUser={onUpdateUser}
        isOpen={isOpen}
        loggedIn={loggedIn}
      />
    </section>
  );
}
