import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

const App = () => {
  return (
    <h1>Hello world</h1>
    <Router>
      <Route path='/'>
        <Users/>
      </Route>
      <Redirect to="/"/>
    </Router>
  );
};
export default App;