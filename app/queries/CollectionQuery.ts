export const ColletionsQuery = `
   query {
      collections(first: 5) {
        edges {
          node {
            title
            id
          }
        }
      }
    }
  `;
