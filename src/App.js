import Test from './components/index';
import Result from './components/Result';
import Question from './components/Question';
import Example from './components/Example';


import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"> <Test /> </Route>
          <Route path="/example"> <Example /> </Route>
          <Route path="/question"> <Question /> </Route>
          <Route path="/result"> <Result /> </Route>
      </Switch>
      </BrowserRouter>
  );
}



export default App;
