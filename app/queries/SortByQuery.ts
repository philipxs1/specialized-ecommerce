export const SortByQuery = `
  query SortProducts($handle: String!, $sortKey: ProductCollectionSortKeys!, $reverse: Boolean!) {
    collection(handle: $handle) {
      id
      title
      products(first: 20, sortKey: $sortKey, reverse: $reverse) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice { amount }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
        }
      }
    }
  }
`;
