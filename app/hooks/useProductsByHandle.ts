import { useQuery, type QueryFunction } from "@tanstack/react-query";
import { all } from "axios";
import type { BikesData } from "~/entities/Bikes";
import { formatNumber } from "~/helpers/helpers";
import { ColletionsQuery } from "~/queries/CollectionQuery";
import axiosInstance from "~/services/api-client";

const fetchProductsByHandle = async (handle: string) => {
  const FETCH_BYHANDLE_QUERY = `query {${ColletionsQuery(handle)}}`;

  const response = await axiosInstance.post("", {
    query: FETCH_BYHANDLE_QUERY,
  });

  const data = response.data.data.collection;
  console.log(data);

  const allBikes = data.products.edges.map((edge: { node: any }) => {
    const node = edge.node;

    return {
      id: node.id,
      title: node.title,
      price: formatNumber(node.priceRange.minVariantPrice.amount),
      currency: node.priceRange.minVariantPrice.currencyCode,
      image: node.images.nodes[0]?.url || "",
      altText: node.images.nodes[0]?.altText || "",
    };
  });

  return {
    title: data.title,
    allBikes,
  };
};

const useProductsByHandle = (handle: string) => {
  return useQuery<BikesData, Error, BikesData, [string, string]>({
    queryKey: ["products", handle],
    queryFn: () => fetchProductsByHandle(handle),
  });
};

export default useProductsByHandle;
