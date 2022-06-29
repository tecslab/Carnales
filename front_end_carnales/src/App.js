import IndexPage from './pages/indexPage';
import Layout from './pages/layout';
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
        <Route path="/layout" component={Layout}/>
        <Route path="/pos" component={PoS}/>
      </Switch>
    </div>
  );
}

export default App;