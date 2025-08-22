export interface Tile {
  title: string;
  link: string;
  image: string;
}

export interface MetaField {
  key: string;
  value: string;
  reference?: {
    image: { url: string };
  };
}

export interface MetaObjectNode {
  fields: MetaField[];
}

export interface MetaObjectResponse {
  metaobjects: { edges: { node: MetaObjectNode }[] };
}
