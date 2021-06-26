import { gql } from '@apollo/client';

export const GET_PROS = gql`
  query GetPros($pagination: GetArgs) {
    pros: prosGetMany(pagination: $pagination, professional_type: vet) {
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
      pictures {
        picture {
          thumb
        }
      }
      paymentMethods
      employee_numbers
      numberOfASV
    }
  }
`;
