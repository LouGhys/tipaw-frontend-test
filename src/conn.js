import ProCard from "./pageItems/ProCard/ProCard";
import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
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

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.pros.map((pro, index) => (
    <div key={index}>
      <ProCard pro={pro} />
    </div>
  ));
}

export default ExchangeRates;
