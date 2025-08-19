import type { Product } from "./Products";

export interface Collection {
  handle: string;
  title: string;
  id: string;
  image: { url: string };
}
