import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Users from "./user/Users";

const App = () => 
{
  return (
    <Router>
      <Route path='/'>
        <Users/>
      </Route>
      <Redirect to="/Rouen"/>
    </Router>
  );
};
export default App;