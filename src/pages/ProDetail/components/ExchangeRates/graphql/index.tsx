import { gql } from '@apollo/client';

export const EXCHANGE_RATES = gql`
  query GetExchangeRates {
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
