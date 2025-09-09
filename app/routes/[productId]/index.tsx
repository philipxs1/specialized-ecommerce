import { useParams } from "react-router";
import ProductLayout from "~/components/layouts/ProductLayout";

import ProductPage from "~/components/product-page/ProductPage";
import useProductId from "~/hooks/useProductId";

export default function ProductRoute() {
  const { productId, productHandle } = useParams<{
    productId: string;
    productHandle: string;
  }>();

  const { data: product, isLoading, isError } = useProductId(productId ?? "");
  console.log(product);

  // if (isLoading) return <p>Loading product…</p>;
  // if (isError || !product) return <p>Product not found</p>;

  return (
    <>
      <ProductPage
        title={product?.title}
        descriptionHtml={product?.descriptionHtml}
        description={product?.description}
        price={product?.price}
        variants={product?.variants}
      />
    </>
  );
}
