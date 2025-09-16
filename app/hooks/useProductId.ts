import { useQuery } from "@tanstack/react-query";

import { ProductQuery } from "~/queries/ProductQuery";
import axiosInstance from "~/services/api-client";

const fetchProductById = async (id: string) => {
  const gid = `gid://shopify/Product/${id}`;
  const response = await axiosInstance.post("", {
    query: ProductQuery,
    variables: { id: gid },
  });

  const product = response.data.data.product;
  console.log(product);
  const variants = mapVariantsWithImages(product.variants.edges);

  return {
    id: product.id,
    title: product.title,
    description: product.description,
    descriptionHtml: product.descriptionHtml,
    price: Number(product.priceRange.maxVariantPrice.amount),
    variants: variants,
    defaultVariant: variants[0] || null,
  };
};

const useProductId = (id: string) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProductById(id),
  });
};

export default useProductId;

const mapVariantsWithImages = (variantsData: any[]) => {
  return variantsData.map((variantEdge) => {
    const variant = variantEdge.node;

    // Extract all images from metafields
    const images: string[] = [];

    variant.metafields.forEach((mfEdge: any) => {
      const references = mfEdge.references.edges;
      references.forEach((refEdge: any) => {
        if (refEdge.node.image?.url) {
          images.push(refEdge.node.image.url);
        }
      });
    });

    return {
      id: variant.id,
      title: variant.title,
      images,
    };
  });
};
