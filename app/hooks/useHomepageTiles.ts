import { useQuery } from "@tanstack/react-query";
import type {
  MetaField,
  MetaObjectNode,
  MetaObjectResponse,
  Tile,
} from "~/entities/HomepageNavTiles";

import { MetaobjectsQuery } from "~/queries/MetaobjectsQuery";

import axiosInstance from "~/services/api-client";

const fetchHomepageTiles = async (): Promise<Tile[]> => {
  const QUERY = MetaobjectsQuery("homepage_tile");

  const response = await axiosInstance.post("", {
    query: QUERY,
  });

  const edges = response.data.data.metaobjects.edges;

  return edges.map((edge: { node: MetaObjectNode }) => {
    const fields = edge.node.fields;

    const titleField = fields.find((f: any) => f.key === "title");
    const imageField = fields.find((f: any) => f.key === "image");
    const linkField = fields.find((f: any) => f.key === "url");

    const imageUrl = imageField?.reference?.image?.url || "";

    return {
      title: titleField?.value || "",
      link: linkField?.value || "",
      image: imageUrl,
    };
  });
};

const useHomepageTiles = () => {
  return useQuery<Tile[], Error>({
    queryKey: ["HomepageTiles"],
    queryFn: fetchHomepageTiles,
  });
};

export default useHomepageTiles;

function navtileData() {}
