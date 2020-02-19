import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => 
{
  return (
    <Router>
      <switch>
        <Route path='/' exact>
          <Users/>
        </Route>
        <Route path='/places/new' exact>
          <NewPlace></NewPlace>
        </Route>
      </switch>
    </Router>
  );
};

export default App;
