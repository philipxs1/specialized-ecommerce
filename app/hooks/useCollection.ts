import { useQuery } from "@tanstack/react-query";

import { useSearchParams } from "react-router";
import { useFilters } from "~/context/FilterProvider";

import { CollectionQuery } from "~/queries/CollectionQuery";
import { METAOBJECTS_QUERY } from "~/queries/MetaFieldQuery";
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

const fetchCollection = async (handle: string, sortBy: string) => {
  const { sortKey, reverse } = getSortBy(sortBy);

  const response = await axiosInstance.post("", {
    query: CollectionQuery,
    variables: { handle, sortKey, reverse },
  });
  const data = response.data.data.collection;

  const products = data.products.edges.map((edge: { node: any }) => {
    const node = edge.node;

    return {
      gid: node.id,
      id: node.id.split("/").pop(),
      handle: node.handle,
      title: node.title,
      price: Number(node.priceRange.minVariantPrice.amount),
      currency: node.priceRange.minVariantPrice.currencyCode,
      image: node.images.edges[0]?.node.url || "",
      altText: node.images.edges[0]?.node.altText || "",
    };
  });

  const tileIds = JSON.parse(data?.metafield?.value ?? "[]");
  const tiles = await fetchCarouselTiles(tileIds);

  return {
    title: data.title,
    products,
    tiles,
  };
};

export async function fetchCarouselTiles(ids: string[]) {
  if (!ids.length) return [];

  const response = await axiosInstance.post("", {
    query: METAOBJECTS_QUERY,
    variables: { ids },
  });

  const nodes = response.data.data.nodes;

  // Map the fields into a usable object
  return nodes.map((node: any) => {
    const fields: Record<string, any> = {};
    node.fields.forEach((f: any) => {
      // For reference fields (like images), store the resolved object
      if (f.reference?.image) {
        fields[f.key] = {
          url: f.reference.image.url,
          alt: f.reference.image.altText,
        };
      } else {
        fields[f.key] = f.value;
      }
    });

    return {
      id: node.id,
      type: node.type,
      title: fields.title ?? "",
      subtitle: fields.subtitle ?? "",
      link: fields.link ?? "#",
      promo: fields.promo === "true",
      image: fields.image?.url ?? "",
      alt: fields.image?.alt ?? "",
    };
  });
}

export default function useCollection(handle: string) {
  const [searchParams] = useSearchParams();
  const { sortBy } = useFilters();

  return useQuery({
    queryKey: ["collection", handle, sortBy],
    queryFn: () => fetchCollection(handle, sortBy),
    staleTime: 1000 * 60 * 5,
    placeholderData: (previousData) => previousData,
  });
}
