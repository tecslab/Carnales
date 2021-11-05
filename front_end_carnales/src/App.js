import IndexPage from './pages/indexPage';
import Layout from './pages/layoutGenerator';

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
      </Switch>
    </div>
  );
}

export default App;