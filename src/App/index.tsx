import { Header } from 'components';
import { Home, ProDetail, ProNew } from 'pages';
import { Route, Router, Switch } from 'react-router';
import 'styles/global.scss';
import { history } from 'utils';

export const App = () => {
  return (
    <Router history={history}>
      <div className='App'>
        <Header />
        <main style={{ minHeight: '50vh', paddingTop: '120px' }}>
          <Switch>
            <Route path='/pro/:id' component={ProDetail} />
            <Route path='/new/pro' component={ProNew} />
            <Route path='/' component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};
