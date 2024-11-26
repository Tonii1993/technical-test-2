import React from "react";
import { Route, Switch } from "react-router-dom";

import NewList from "./list";
import UserView from "./view";

const User = () => {
  return (
    <Switch>
      <Route path="/user/:id" component={UserView} />
      <Route path="/" component={NewList} />
    </Switch>
  );
};

export default User;
