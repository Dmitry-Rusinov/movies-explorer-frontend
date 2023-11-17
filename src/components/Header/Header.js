import headerLogo from "../../images/headerLogo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

export default function Header({ loggedIn }) {
  return (
    <header className="header">
      <Link to="/">
      <img alt="Логотип" src={headerLogo} className="header__logo" />
      </Link>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}
