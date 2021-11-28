import Home from './components/index';
import Result from './components/Result';
import Example from './components/Example';
import Question from './components/Question';
import Last from './components/Last';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

function App() {
  
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/test">
            <Home />
          </Route>
          <Route path="/example">
            <Example />
          </Route>
          <Route path="/question">
            <Question />
          </Route>
          <Route path="/last">
            <Last />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route exact path="/">
            <Redirect to = "/test" />
          </Route>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
