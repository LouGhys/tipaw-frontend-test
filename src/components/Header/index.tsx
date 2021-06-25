import classNames from 'classnames/bind';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import TipawLogo from './assets/logo-tipaw.svg';
import styleIdentifiers from './header.scss';

const styles = classNames.bind(styleIdentifiers);

export const Header: FC = ({ ...props }) => {
  return (
    <div className={styles('header-wrapper')} {...props}>
      <div className={styles('header-container')}>
        <div className={styles('logo')}>
          {/* <NavLink to={pushRoute('homesearch', lg)}> */}
          <Link to={``}>
            <img src={TipawLogo} alt='Tipaw Logo' />
          </Link>
          {/* </NavLink> */}
        </div>
      </div>
    </div>
  );
};
