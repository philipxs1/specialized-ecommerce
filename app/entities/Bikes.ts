export interface BikesData {
  title: string;
  allBikes: Product[];
}

interface Product {
  title: string;
  price: number;
  currencyCode: string;
  image: string;
}
