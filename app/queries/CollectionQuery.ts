export const CollectionQuery = `
    query SortProducts($handle: String!, $sortKey: ProductCollectionSortKeys!, $reverse: Boolean!) {
      collection(handle: $handle) {
        title
        products(first: 50, , sortKey: $sortKey, reverse: $reverse) {
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
           metafield(namespace: "custom", key: "carousel") {
      value
    }
      }
    }
  
  `;
