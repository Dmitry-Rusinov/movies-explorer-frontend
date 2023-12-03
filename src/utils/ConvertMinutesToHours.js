import { ONE_HOUR } from "./Const/Constants";

export default function convertMinutesToHourse(totalMinutes) {
  const minutes = totalMinutes % ONE_HOUR;
  const hours = Math.floor(totalMinutes / ONE_HOUR);

  return `${valueDigits(hours)}ч${valueDigits(minutes)}м`;
}

function valueDigits(num) {
  return num.toString();
}
