import classNames from 'classnames/bind';
import { ExchangeRates } from 'pages/ProDetail/components/ExchangeRates';
import styleIdentifiers from './home.scss';

const styles = classNames.bind(styleIdentifiers); // use this to parse the html string fields

export const Home = () => {
  return (
    <div className={styles('Home')}>
      <h1>Homepage</h1>
      <div className={styles('grid')}>
        <ExchangeRates />
      </div>
    </div>
  );
};
