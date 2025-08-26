import { useQuery } from "@tanstack/react-query";
import type { BikesData } from "~/entities/Bikes";
import { formatNumber } from "~/helpers/helpers";
import { BikesQuery } from "~/queries/BikesQuery";
import axiosInstance from "~/services/api-client";

const fetchBikes = async (): Promise<BikesData> => {
  const response = await axiosInstance.post("", { query: BikesQuery });
  const data = response.data.data.collection;

  // Map edges to flat product objects
  const allBikes = data.products.edges.map((edge: { node: any }) => {
    const node = edge.node;

    return {
      id: node.id,
      title: node.title,
      price: formatNumber(node.priceRange.minVariantPrice.amount),
      currency: node.priceRange.minVariantPrice.currencyCode,
      image: node.images.edges[0]?.node.url || "",
      altText: node.images.edges[0]?.node.altText || "",
    };
  });

  return {
    title: data.title,
    allBikes,
  };
};

const useBikes = () => {
  return useQuery<BikesData>({ queryKey: ["bikes"], queryFn: fetchBikes });
};

export default useBikes;
