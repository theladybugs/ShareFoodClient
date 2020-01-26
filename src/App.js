import React, { Fragment, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Alert from "./components/layout/Alert";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import { loadUser } from "./action/auth";
import setAuthToken from "./utils/setAuthToken";
import "../node_modules/font-awesome/css/font-awesome.min.css";

//Redux
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <div className="App">
            <Navbar />

            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <Alert />
                  <Switch>
                    <Route exact path="/signin" component={SignIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <PrivateRoute
                      exact
                      path="/dashboard"
                      component={Dashboard}
                    />
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
