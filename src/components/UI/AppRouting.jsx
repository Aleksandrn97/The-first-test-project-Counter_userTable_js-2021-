import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

// eslint-disable-next-line import/no-extraneous-dependencies
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Counter from "../pages/Counter";
import JavaScript from "../pages/JavaScript";
import UserTable from "../pages/UserTable";

function AppRouting() {
  const routes = ["/counter", "/usertable", "/javascript"];

  return (
    <div id="root">
      <BrowserRouter>
        <Route
          path="/"
          render={(history) => (
            <AppBar>
              <Tabs
                value={history.location.pathname !== "/"
                  ? history.location.pathname
                  : false}
                className="my_navbar"
              >
                <Tab
                  label="Counter"
                  value={routes[0]}
                  component={Link}
                  to={routes[0]}
                />
                <Tab
                  label="Users"
                  value={routes[1]}
                  component={Link}
                  to={routes[1]}
                />
                <Tab
                  label="JavaScript tasks"
                  value={routes[2]}
                  component={Link}
                  to={routes[2]}
                />
              </Tabs>
            </AppBar>
          )}
        />
        <Switch>
          <Route path="/counter" component={Counter} />
          <Route path="/usertable" component={UserTable} />
          <Route path="/javascript" component={JavaScript} />
          <Redirect to="/counter" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default AppRouting;
