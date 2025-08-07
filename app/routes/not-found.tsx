import { json } from "stream/consumers";

export function loader() {
  // Even an empty loader is enough
  return json({});
}

export default function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}
