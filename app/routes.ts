import {
  type RouteConfig,
  index,
  prefix,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    ...prefix("shop", [
      index("routes/shop/index.tsx"),
      route("bikes", "routes/shop/bikes/index.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
