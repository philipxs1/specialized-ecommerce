export const BikesQuery = `
query {
    collection(handle: "bikes") {
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
