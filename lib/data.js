import { GraphQLClient, gql } from "graphql-request";

export const getPreviewServices = async () => {
  const endpoint = `${process.env.ENDPOINT}`;

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      services(where: { preview: true }) {
        title
        description
        images {
          height
          url
          width
        }
        slug
      }
    }
  `;
  return await graphQLClient.request(query);
  /*  console.log(JSON.stringify(data, undefined, 2)); */
};
