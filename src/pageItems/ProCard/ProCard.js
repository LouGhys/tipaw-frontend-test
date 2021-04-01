import React from "react";
import classNames from "classnames/bind";
import { NavLink, Link } from "react-router-dom";

import styleIdentifiers from "./ProCard.scss";

import parse from "html-react-parser";
const styles = classNames.bind(styleIdentifiers); // use this to parse the html string fields

function ProCard(props) {
  const { pro } = props;

  return (
    <div className={styles("pro-card")}>
      <div className={styles("pro-wrapper")}>
        <Link to={`/pro/${pro._id}`} className={styles("link")} />
        <h2>{pro.titleMulti?.fr}</h2>
        <div className={styles("description")}>{parse(pro.description)}</div>
        <div className={styles("meta")}>
          <div className={styles("location")}>
            <div className={styles("label")}>City</div>
            <div className={styles("value")}>{pro.address.city}</div>
          </div>
          <div className={styles("languages")}>
            <div className={styles("label")}>Languages</div>
            <div className={styles("value")}>
              {pro.spokenLanguages &&
                pro.spokenLanguages.map((l, index) => {
                  return <p key={index}>{l}</p>;
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProCard;
