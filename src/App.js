import User from './components/User';
import Result from './components/Result';
import Test from './components/Test';
import Example from './components/Example';


import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/"> <User /> </Route>
          <Route path="/example"> <Example /> </Route>
          <Route path="/test"> <Test /> </Route>
          <Route path="/result"> <Result /> </Route>
      </Switch>
      </BrowserRouter>
  );
}



export default App;
