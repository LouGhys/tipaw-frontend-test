import { useQuery } from '@apollo/client';
import { ProCard } from '..';
import { GET_PROS } from './graphql';
import { GetPros } from './graphql/__generated__/GetPros';

export const ProCardQueryWrapper = () => {
  const { loading, error, data } = useQuery<GetPros>(GET_PROS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data?.pros.map((pro, index) => (
        <div key={index}>
          <ProCard pro={pro} />
        </div>
      ))}
    </>
  );
};
