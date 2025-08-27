export const ColletionsQuery = (handle: string) => `

  collection(handle: "${handle}") {
    title
    products(first: 20) {
      edges {
        node {
          title
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            nodes {
              url
              altText
            }
          }
        }
      }
    }
  }

`;
