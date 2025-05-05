import React from "react";
import './../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserDetails from "./UserDetails";
import UserList from "./UserList";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route path="/users/:id" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
