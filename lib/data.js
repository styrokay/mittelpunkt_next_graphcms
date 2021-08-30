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

export const getAllServicesWithSlug = async () => {
  const endpoint = `${process.env.ENDPOINT}`;

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      services {
        slug
      }
    }
  `;
  return await graphQLClient.request(query);
  /*  console.log(JSON.stringify(data, undefined, 2)); */
};

export const getSingleService = async (slug) => {
  const endpoint = `${process.env.ENDPOINT}`;

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    query allServices($slug: String!) {
      service(where: { slug: $slug }) {
        title
        description
        images {
          height
          width
          url
        }
        details {
          json
        }
      }
    }
  `;

  const variables = {
    slug,
  };

  return await graphQLClient.request(query, variables);
  /*  console.log(JSON.stringify(data, undefined, 2)); */
};

export const getReferenceList = async () => {
  const endpoint = `${process.env.ENDPOINT}`;

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      references {
        description {
          json
        }
      }
    }
  `;
  return await graphQLClient.request(query);
  /*  console.log(JSON.stringify(data, undefined, 2)); */
};

export const getServiceList = async () => {
  const endpoint = `${process.env.ENDPOINT}`;

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      services(where: { section: Angebot }) {
        title
        slug
        description
        images(first: 1) {
          fileName
          url
        }
      }
    }
  `;
  return await graphQLClient.request(query);
  /*  console.log(JSON.stringify(data, undefined, 2)); */
};

export const getAboutData = async () => {
  const endpoint = `${process.env.ENDPOINT}`;

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      teams {
        jobtitle
        name
        image {
          url
        }
        description {
          raw
        }
      }

      abouts {
        description {
          raw
        }
      }
    }
  `;
  return await graphQLClient.request(query);
  /*  console.log(JSON.stringify(data, undefined, 2)); */
};

export const getIndexData = async () => {
  const endpoint = `${process.env.ENDPOINT}`;

  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    {
      indices {
        title
        description {
          raw
        }
      }
    }
  `;
  return await graphQLClient.request(query);
  /*  console.log(JSON.stringify(data, undefined, 2)); */
};
