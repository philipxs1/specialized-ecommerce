import { useQuery } from "@tanstack/react-query";
import type Collection from "~/entities/Collection";
import { ColletionsQuery } from "~/queries/CollectionQuery";
import axiosInstance from "~/services/api-client";

const fetchCollections = async (): Promise<Collection[]> => {
  const response = await axiosInstance.post("", {
    query: ColletionsQuery,
  });
  const edges = response.data.data.collections.edges;

  return edges.map((e: any) => e.node);
};

const useCollections = () => {
  return useQuery<Collection[], Error>({
    queryKey: ["collections"],
    queryFn: fetchCollections,
  });
};

export default useCollections;
