import { useQuery } from '@apollo/client';
import { ProCard } from '..';
import { EXCHANGE_RATES } from './graphql';
import { GetExchangeRates } from './graphql/__generated__/GetExchangeRates';

export const ExchangeRates = () => {
  const { loading, error, data } = useQuery<GetExchangeRates>(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data?.pros.map((pro, index) => (
    <div key={index}>
      <ProCard pro={pro} />
    </div>
  ));
};
