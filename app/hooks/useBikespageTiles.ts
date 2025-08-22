import { useQuery } from "@tanstack/react-query";
import type { MetaObjectNode, Tile } from "~/entities/HomepageNavTiles";
import { MetaobjectsQuery } from "~/queries/MetaobjectsQuery";
import axiosInstance from "~/services/api-client";

const fetchTiles = async (): Promise<{ bikes: Tile[]; promos: Tile[] }> => {
  const FETCH_TILES_QUERY = `query { ${MetaobjectsQuery("bikespage", "bikespage_tiles")}
  ${MetaobjectsQuery("promo", "promo_tiles")}
  }`;

  const response = await axiosInstance.post("", { query: FETCH_TILES_QUERY });
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
    bikes: mapTiles(data.bikespage.edges),
    promos: mapTiles(data.promo.edges),
  };
};

const useHomepageTiles = () => {
  return useQuery({
    queryKey: ["homepageTiles"],
    queryFn: fetchTiles,
  });
};

export default useHomepageTiles;
