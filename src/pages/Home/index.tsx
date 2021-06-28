import classNames from 'classnames/bind';
import { GetProsQueryWrapper } from 'pages/ProDetail/components/GetProsQueryWrapper';
import { GetProsVariables } from 'pages/ProDetail/components/GetProsQueryWrapper/graphql/__generated__/GetPros';
import React, { ChangeEventHandler, useCallback, useState } from 'react';
import styleIdentifiers from './home.scss';

const styles = classNames.bind(styleIdentifiers); // use this to parse the html string fields

export const Home = () => {
  const [pagination, setPagination] = useState<GetProsVariables['pagination']>({ limit: 20, skip: 0 });

  const limitChangeHandler: ChangeEventHandler<HTMLSelectElement> = useCallback((event) => {
    const limit: number = parseInt(event.target.value);
    if (isNaN(limit)) {
      return setPagination(undefined);
    }
    setPagination({ skip: 0, limit });
  }, []);

  return (
    <div className={styles('Home')}>
      <h1>Homepage</h1>
      <div className={styles('limit')}>
        <label htmlFor='limit' className={styles('limit-label')}>
          Show
        </label>
        <select name='limit' onChange={limitChangeHandler}>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={undefined}>All</option>
        </select>
      </div>
      <div className={styles('grid')}>
        <GetProsQueryWrapper pagination={pagination} />
      </div>
    </div>
  );
};
