export const METAOBJECTS_QUERY = `
query getMetaobjects($ids: [ID!]!) {
  nodes(ids: $ids) {
    ... on Metaobject {
      id
      type
      fields {
        key
        value
        reference {
          ... on MediaImage {
            image {
              url
              altText
            }
          }
        }
      }
    }
  }
}
`;

// `
// query getMetaobjects($ids: [ID!]!) {
//   nodes(ids: $ids) {
//     ... on Metaobject {
//       id
//       type
//       fields {
//         key
//         value
//         reference {
//           ... on MediaImage {
//             image {
//               url
//               altText
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `;
