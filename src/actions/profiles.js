import gql from "graphql-tag";

const GET_PROFILES = gql`
  {
    search(query: "location:kyiv", type: USER, first: 10) {
      edges {
        node {
          ... on User {
            id,
            name,
            url,
            login,
            email,
            avatarUrl,
            location,
            bio
          }
        }
      }
    }
  }
`;

export default GET_PROFILES;
