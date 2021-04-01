import ExchangeRates from "../../conn";

import classNames from "classnames/bind";
import styleIdentifiers from "./home.scss";
const styles = classNames.bind(styleIdentifiers); // use this to parse the html string fields

function Home() {
  return (
    <div className={styles("Home")}>
      <h1>Homepage</h1>
      <div className={styles("grid")}>
        <ExchangeRates />
      </div>
    </div>
  );
}

export default Home;
