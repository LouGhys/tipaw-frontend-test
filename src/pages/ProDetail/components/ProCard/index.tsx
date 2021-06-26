import classNames from 'classnames/bind';
import parse from 'html-react-parser';
import React, { FC, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { GetPros_pros } from '../GetProsQueryWrapper/graphql/__generated__/GetPros';
import DoctorIcon from './assets/doctor-icon.svg';
import NurseIcon from './assets/nurse-icon.svg';
import styleIdentifiers from './ProCard.scss';

const styles = classNames.bind(styleIdentifiers); // use this to parse the html string fields

export type ProCardProps = HTMLAttributes<HTMLDivElement> & {
  pro: GetPros_pros;
};

export const ProCard: FC<ProCardProps> = ({ pro, ...props }) => {
  return (
    <div className={styles('pro-card')} {...props}>
      <Link to={`/pro/${pro._id}`} className={styles('link')} />
      {!!pro?.pictures?.[0]?.picture?.thumb && (
        <div className={styles('thumb-wrapper')}>
          <img src={pro.pictures[0].picture.thumb} className={styles('thumb')} alt='' />
        </div>
      )}
      <div className={styles('pro-wrapper')}>
        <h2>{pro.titleMulti?.fr}</h2>
        <div className={styles('description')}>{parse(pro.description ?? '')}</div>
        <div className={styles('meta')}>
          <div className={styles('employees')}>
            <div className={styles('label')}>Employees</div>
            <div className={styles('value')}>
              <p>
                <img src={DoctorIcon} alt='' className={styles('icon')} />
                {`${pro?.employee_numbers ?? 0} vets`}
              </p>
              <p>
                <img src={NurseIcon} alt='' className={styles('icon')} />
                {`${pro?.numberOfASV ?? 0} assistants`}
              </p>
            </div>
          </div>
          <div className={styles('location')}>
            <div className={styles('label')}>City</div>
            <div className={styles('value')}>{pro?.address?.city}</div>
          </div>
          {pro.spokenLanguages && (
            <div className={styles('languages')}>
              <div className={styles('label')}>Languages</div>
              <div className={styles('value')}>
                {pro.spokenLanguages.map((lang, index) => {
                  return <p key={index}>{lang}</p>;
                })}
              </div>
            </div>
          )}
          {pro.paymentMethods && (
            <div className={styles('paymentMethods')}>
              <div className={styles('label')}>Payment methods</div>
              <div className={styles('value')}>
                {pro.paymentMethods.map((lang, index) => {
                  return (
                    <p className={styles('tag')} key={index}>
                      {lang}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
