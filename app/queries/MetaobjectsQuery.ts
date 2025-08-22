export const MetaobjectsQuery = (type: string) => `query {
  metaobjects(type: "${type}", first: 20) {
    edges {
      node {
        handle
        fields {
          key
          value
         reference {
            ... on MediaImage {
              id
              image {
                url
              }
            }
          }
        }
      }
    }
  }
}`;
