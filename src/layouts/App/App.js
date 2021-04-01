import Header from "../../global/Header/Header";
import history from "../../utils/history";
import { Switch } from "react-router";
import { Route, Router } from "react-router-dom";

import Home from "../../routes/Home";
import ProDetail from "../../routes/ProDetail";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <main style={{ minHeight: "50vh", paddingTop: "120px" }}>
          <Switch>
            <Route path="/pro/:id" component={ProDetail} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
