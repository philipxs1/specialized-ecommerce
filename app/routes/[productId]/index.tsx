import { useParams } from "react-router";
import ProductPage from "~/components/product-page/ProductPage";
import useProductId from "~/hooks/useProductId";

export default function ProductRoute() {
  const { productId } = useParams<{ productId: string }>();

  const { data: product, isLoading, isError } = useProductId(productId ?? "");

  if (isLoading) return <p>Loading product…</p>;
  if (isError || !product) return <p>Product not found</p>;

  const defaultVariant = product.variants?.[0] || null;

  return (
    <ProductPage
      id={product.id}
      title={product.title}
      descriptionHtml={product.descriptionHtml}
      description={product.description}
      price={product.price}
      variants={product.variants}
      defaultVariant={defaultVariant}
    />
  );
}
