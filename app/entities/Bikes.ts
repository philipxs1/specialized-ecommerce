export interface BikesData {
  title: string;
  allBikes: Product[];
}

export interface Product {
  title: string;
  price: number;
  currencyCode: string;
  image: string;
}
