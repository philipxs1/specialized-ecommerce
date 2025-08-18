export const getCategoriesQuery = `
    {
      collections(first: 5) {
        edges {
          node {
            
            title
           
          }
        }
      }
    }
  `;
