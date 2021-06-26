import { gql } from '@apollo/client';

export const GET_PRO = gql`
  query GetPro($id: String!) {
    prosGetOne(id: $id) {
      titleMulti {
        fr
      }
      pictures {
        picture {
          full
        }
      }
      employee_numbers
      numberOfASV
      services {
        category {
          title {
            fr
          }
        }
        service {
          title {
            fr
          }
        }
      }
      spokenLanguages
      paymentMethods
      phone
      mobilePhone
      email
      website
      address {
        city
        zip
        street
        number
      }
      localisation
    }
  }
`;
