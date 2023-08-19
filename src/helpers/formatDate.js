import { format } from "date-fns";

export default function formatDate(dateString) {
  if (!dateString) return "";
  return format(new Date(dateString), "dd-MM-yyyy");
}
