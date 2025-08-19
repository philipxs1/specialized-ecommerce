export const ColletionsQuery = `
   query {
      collections(first: 10) {
        edges {
          node {
            title
            handle
            id
            image {
            url}
          }
        }
      }
    }
  `;
