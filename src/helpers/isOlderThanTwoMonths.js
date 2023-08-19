import { differenceInMonths } from "date-fns";

export default function isOlderThanTwoMonths(dateString) {
  if (!dateString) return null;
  const date = new Date(dateString);
  const now = new Date();
  const difference = differenceInMonths(now, date);
  return difference >= 2;
}
