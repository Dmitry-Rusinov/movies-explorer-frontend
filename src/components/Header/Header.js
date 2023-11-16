import headerLogo from "../../images/headerLogo.svg";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

export default function Header({ loggedIn }) {
  return (
    <header className="header">
      <img alt="Логотип" src={headerLogo} />
      <Navigation loggedIn={loggedIn} />
    </header>
  );
}
