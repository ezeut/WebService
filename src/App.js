import User from './components/User';
import Result from './components/Result';
import Question from './components/Question';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <User />
          </Route>
          <Route path="/test">
            <Question />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
      </Switch>
      </BrowserRouter>
  );
}



export default App;
