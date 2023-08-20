import { addSeconds, format } from "date-fns";

export default function convertExpiresInToDate(expiresInSeconds) {
  const currentDate = new Date();
  const expirationDate = addSeconds(currentDate, expiresInSeconds);
  const formattedExpirationDate = format(expirationDate, "yyyy-MM-dd HH:mm:ss");
  return formattedExpirationDate;
}
