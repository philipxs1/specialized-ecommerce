export const ColletionsQuery = `
   query {
      collections(first: 10) {
        edges {
          node {
            title
            id
            image {
            url}
          }
        }
      }
    }
  `;
