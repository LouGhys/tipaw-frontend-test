import classNames from 'classnames';
import { groupBy } from 'lodash/fp';
import { GetPro_prosGetOne } from 'pages/ProDetail/graphql/__generated__/GetPro';
import { FC, useMemo } from 'react';
import styleIdentifiers from '../../proDetail.scss';
import { ProDetailItem } from '../ProDetailItem';

const styles = classNames.bind(styleIdentifiers);

export type ProServiceListProps = {
  services: GetPro_prosGetOne['services'];
};

export const ProServiceList: FC<ProServiceListProps> = ({ services }) => {
  const servicesByCategory = useMemo(() => groupBy((p) => p?.category?.title.fr, services ?? []), [services]);

  return (
    <>
      {Object.keys(servicesByCategory).map((category: string, index) => (
        <ProDetailItem
          key={index}
          label={category}
          value={
            <ul>
              {servicesByCategory[category]
                .flatMap((s) => s.service?.title.fr)
                .sort()
                .map((service, index) => (
                  <span key={index} className={styles('service-item')}>
                    {service}
                  </span>
                ))}
            </ul>
          }
        />
      ))}
    </>
  );
};
