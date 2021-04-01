import React from "react";
import classNames from "classnames/bind";
import { NavLink, Link } from "react-router-dom";

import TipawLogo from "./assets/logo-tipaw.svg";

import styleIdentifiers from "./header.scss";
const styles = classNames.bind(styleIdentifiers);

function Header() {
  return (
    <div className={styles("header-wrapper")}>
      <div className={styles("header-container")}>
        <div className={styles("logo")}>
          {/* <NavLink to={pushRoute('homesearch', lg)}> */}
          <Link to={``}>
            <img src={TipawLogo} alt="Tipaw Logo" />
          </Link>
          {/* </NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
