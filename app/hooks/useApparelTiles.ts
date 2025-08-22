import { useQuery } from "@tanstack/react-query";
import type { MetaObjectNode, Tile } from "~/entities/HomepageNavTiles";
import { MetaobjectsQuery } from "~/queries/MetaobjectsQuery";
import axiosInstance from "~/services/api-client";

const fetchApparelTiles = async (): Promise<{ clothes: Tile[] }> => {
  const QUERY = `query {
    ${MetaobjectsQuery("clothespage", "clothing_tiles")}
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

  return {
    clothes: mapTiles(data.clothespage.edges), // ✅ matches the alias in query
  };
};

const useApparelTiles = () => {
  return useQuery({
    queryKey: ["clothingpageTiles"],
    queryFn: fetchApparelTiles,
  });
};

export default useApparelTiles;
