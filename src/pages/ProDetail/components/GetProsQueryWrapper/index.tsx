import { useQuery } from '@apollo/client';
import React, { FC, HTMLAttributes, useMemo } from 'react';
import { ProCard } from '..';
import { GET_PROS } from './graphql';
import { GetPros, GetProsVariables } from './graphql/__generated__/GetPros';

export type GetProsQueryWrapperProps = HTMLAttributes<HTMLDivElement> & {
  pagination: GetProsVariables['pagination'];
};

export const GetProsQueryWrapper: FC<GetProsQueryWrapperProps> = ({ pagination, ...props }) => {
  const variables = useMemo(
    (): GetProsVariables => ({
      ...(pagination?.limit != null && pagination?.skip != null ? { pagination } : null),
    }),
    [pagination]
  );

  const { loading, error, data } = useQuery<GetPros>(GET_PROS, { variables });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (!data || !data?.pros.length) return <p>No pros found</p>;

  return (
    <>
      {data?.pros.map((pro, index) => (
        <ProCard key={index} {...props} pro={pro} />
      ))}
    </>
  );
};
