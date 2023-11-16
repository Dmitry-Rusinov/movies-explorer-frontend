import React from "react";
import Header from "../Header/Header";
import "./Profile.css";
import ProfileForm from "../ProfileForm/ProfileForm";

export default function Profile({ loggedIn }) {
  return (
    <section className="profile">
      <Header loggedIn={!loggedIn} />
      <ProfileForm />
    </section>
  );
}
