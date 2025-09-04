import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useFilters } from "~/context/FilterProvider";
import type { BikesData } from "~/entities/Bikes";
import { formatNumber } from "~/helpers/helpers";
import { BikesQuery } from "~/queries/BikesQuery";
import { SortByQuery } from "~/queries/SortByQuery";
import axiosInstance from "~/services/api-client";

function getSortBy(sortBy: string) {
  switch (sortBy) {
    case "New":
      return { sortKey: "CREATED", reverse: true };
    case "Price (Low-High)":
      return { sortKey: "PRICE", reverse: false };
    case "Price (High-Low)":
      return { sortKey: "PRICE", reverse: true };
    case "Featured":
    default:
      return { sortKey: "MANUAL", reverse: false };
  }
}

const fetchBikes = async (
  sortBy: string,
  handle: string,
): Promise<BikesData> => {
  const { sortKey, reverse } = getSortBy(sortBy);

  const response = await axiosInstance.post("", {
    query: SortByQuery,
    variables: {
      handle,
      sortKey,
      reverse,
    },
  });
  const data = response.data.data.collection;

  console.log(data);
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

const useProductsByCollection = (handle: string) => {
  const { sortBy } = useFilters();
  return useQuery({
    queryKey: ["bikes", sortBy, handle],
    queryFn: () => fetchBikes(sortBy, handle),
    staleTime: 1000 * 60 * 5,

    placeholderData: (previousData) => previousData,
  });
};

export default useProductsByCollection;
