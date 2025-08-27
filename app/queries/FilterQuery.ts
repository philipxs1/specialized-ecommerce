export const FilterOptionsQuery = `
query {
  collection(handle: "bikes") {
    title
    metafield(key: "filter_groups", namespace: "custom") {
      value
      type
      id
    }
  }
}
`;

export const getMetaObjectQuery = `
query GetMetaobjects($ids: [ID!]!) {
  nodes(ids: $ids) {
    ... on Metaobject {
      id
      type
      fields {
        key
        value
      }
    }
  }
}
`;
