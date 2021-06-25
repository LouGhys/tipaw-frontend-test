import classNames from 'classnames/bind';
import parse from 'html-react-parser';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { GetExchangeRates_pros } from '../ExchangeRates/graphql/__generated__/GetExchangeRates';
import styleIdentifiers from './ProCard.scss';

const styles = classNames.bind(styleIdentifiers); // use this to parse the html string fields

export type ProCardProps = {
  pro: GetExchangeRates_pros;
};

export const ProCard: FC<ProCardProps> = ({ pro, ...props }) => {
  return (
    <div className={styles('pro-card')} {...props}>
      <div className={styles('pro-wrapper')}>
        <Link to={`/pro/${pro._id}`} className={styles('link')} />
        <h2>{pro.titleMulti?.fr}</h2>
        <div className={styles('description')}>{parse(pro.description ?? '')}</div>
        <div className={styles('meta')}>
          <div className={styles('location')}>
            <div className={styles('label')}>City</div>
            <div className={styles('value')}>{pro?.address?.city}</div>
          </div>
          <div className={styles('languages')}>
            <div className={styles('label')}>Languages</div>
            <div className={styles('value')}>
              {pro.spokenLanguages &&
                pro.spokenLanguages.map((lang, index) => {
                  return <p key={index}>{lang}</p>;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
