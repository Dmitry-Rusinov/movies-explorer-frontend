export default function convertMinutesToHourse(totalMinutes) {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  return `${valueDigits(hours)}ч${valueDigits(minutes)}м`;
}

function valueDigits(num) {
  return num.toString();
}
