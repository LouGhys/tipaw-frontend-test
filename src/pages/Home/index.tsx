import classNames from 'classnames/bind';
import { ProCardQueryWrapper } from 'pages/ProDetail/components/ProCardQueryWrapper';
import styleIdentifiers from './home.scss';

const styles = classNames.bind(styleIdentifiers); // use this to parse the html string fields

export const Home = () => {
  return (
    <div className={styles('Home')}>
      <h1>Homepage</h1>
      <div className={styles('grid')}>
        <ProCardQueryWrapper />
      </div>
    </div>
  );
};
