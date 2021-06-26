import { gql } from '@apollo/client';

export const GET_PROS = gql`
  query GetPros {
    pros: prosGetMany(professional_type: vet) {
      _id
      titleMulti {
        fr
      }

      address {
        city
        street
      }
      description
      spokenLanguages
    }
  }
`;
