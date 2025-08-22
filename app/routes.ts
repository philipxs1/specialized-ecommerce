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
      route("bikes/:handle", "routes/shop/bikes/[handle]/index.tsx"),
      route("cycling-clothing", "routes/shop/cycling-clothing/index.tsx"),
      route(
        "cycling-clothing/:handle",
        "routes/shop/cycling-clothing/[handle]/index.tsx",
      ),
      route("cycling-gear", "routes/shop/cycling-gear/index.tsx"),
      ...prefix("cycling-gear", [
        route("bike-parts", "routes/shop/cycling-gear/bike-parts/index.tsx"),
        route(
          "bike-accessories",
          "routes/shop/cycling-gear/bike-accessories/index.tsx",
        ),
        route(
          "bike-accessories/:handle",
          "routes/shop/cycling-gear/bike-accessories/[handle]/index.tsx",
        ),
      ]),
      route("sale", "routes/shop/sale/index.tsx"),
    ]),
    route("*", "routes/not-found.tsx"),
  ]),
] satisfies RouteConfig;
