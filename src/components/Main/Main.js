import React from "react";
import Promo from "./Promo/Promo";
import NavTab from "./NavTab/NavTab";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../Footer/Footer";

export default function Main({ loggedIn }) {
  return (
    <main>
      <Promo loggedIn={loggedIn} />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      {<Footer />}
    </main>
  );
}
