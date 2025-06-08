import type { Route } from ".react-router/types/app/routes/shop/bikes/+types";

export async function loader() {
  return {
    message: "Phil",
  };
}

export default function BikesRoute({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      Bikes
      <div>{JSON.stringify(loaderData, null, 2)}</div>
    </div>
  );
}
