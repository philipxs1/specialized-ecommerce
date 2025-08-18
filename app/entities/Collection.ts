import type { Product } from "./Products";

export default interface Collection {
  title: string;
  id: string;
  products?: Product[];
}
