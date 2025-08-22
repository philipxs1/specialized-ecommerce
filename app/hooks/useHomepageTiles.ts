import { useQuery } from "@tanstack/react-query";
import type {
  MetaField,
  MetaObjectNode,
  MetaObjectResponse,
  Tile,
} from "~/entities/HomepageNavTiles";

import { MetaobjectsQuery } from "~/queries/MetaobjectsQuery";

import axiosInstance from "~/services/api-client";

const fetchHomepageTiles = async (): Promise<{ homepage: Tile[] }> => {
  const QUERY = `query {
    ${MetaobjectsQuery("homepage", "homepage_tile")}
  }`;

  const response = await axiosInstance.post("", { query: QUERY });
  const data = response.data.data;

  const mapTiles = (edges: { node: MetaObjectNode }[]): Tile[] =>
    edges.map((edge) => {
      const fields = edge.node.fields;
      const titleField = fields.find((f) => f.key === "title");
      const imageField = fields.find((f) => f.key === "image");
      const linkField = fields.find((f) => f.key === "url");

      return {
        title: titleField?.value || "",
        link: linkField?.value || "",
        image: imageField?.reference?.image?.url || "",
      };
    });
  return { homepage: mapTiles(data.homepage.edges) };
};

const useHomepageTiles = () => {
  return useQuery<{ homepage: Tile[] }, Error>({
    queryKey: ["HomepageTiles"],
    queryFn: fetchHomepageTiles,
  });
};

export default useHomepageTiles;

function navtileData() {}
