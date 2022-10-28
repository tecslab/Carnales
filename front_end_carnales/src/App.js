import IndexPage from './pages/indexPage';
import Layout from './pages/layout';
import Dashboard from './pages/dashboard';
import PoS from './pages/pos';

import {
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={IndexPage} exact />
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/pos" component={PoS}/>
        <Route path="/layout" component={Layout}/>
        <Route path="/layoutEditor" component={Layout}/>
      </Switch>
    </div>
  );
}

export default App;