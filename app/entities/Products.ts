export interface Product {
  title: string;
  id: string;
  description: string;
  colour: string;
  images: ProductImage[];
}

export interface ProductImage {
  src: string;
  alt: string;
}
