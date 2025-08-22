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
  const QUERY = MetaobjectsQuery("clothing_tiles");

  const response = await axiosInstance.post("", {
    query: QUERY,
  });

  const edges = response.data.data.metaobjects.edges;

  const tiles = edges.map((edge: { node: MetaObjectNode }) => {
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

  return tiles;
};

const useApparelTiles = () => {
  return useQuery({
    queryKey: ["clothingpageTiles"],
    queryFn: fetchHomepageTiles,
  });
};

export default useApparelTiles;

function navtileData() {}
