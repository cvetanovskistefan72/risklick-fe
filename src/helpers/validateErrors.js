import { toast } from "react-hot-toast";

export default function validateErrors(errors) {
  Object.entries(errors).forEach(([n, l]) => toast.error(l.join("")));
}
