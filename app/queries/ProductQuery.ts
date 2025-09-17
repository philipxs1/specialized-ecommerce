export const ProductQuery = `
query ProductById($id: ID!) {
  product(id: $id) {
    id
    title
    handle
    description
    descriptionHtml
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
    }
 variants(first: 2) {
      edges {
        node {
          id
          title
          metafields(identifiers: {key: "color_gallery", namespace: "custom"}) {
            key
            namespace
            value
            references(first: 10) {
              edges {
                node {
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
      }
    }
  }
}
`;
