import "./infoTooltip.css";
import signV from "../../images/signV.svg";
import signX from "../../images/signX.svg";

export default function InfoTooltip({ isOpen, isConfirm, message }) {
  return (
    <div
      className={`popup popup_type_infoToolTip ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <img
          alt="Знак подтверждения"
          className="popup__image-tip"
          src={isConfirm ? signV : signX}
        ></img>
        <p className="popup__confirm-auth">{message}</p>
      </div>
    </div>
  );
}
