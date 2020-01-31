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
import ShowProfile from "./components/dashboard/ShowProfile";
import EditProfile from "./components/dashboard/EditProfile";
import DeleteProfile from "./components/dashboard/DeleteProfile";
import AnnoncePage from "./components/annonce/AnnoncePage";
import AddAnnonce from "./components/annonce/AddAnnonce";

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
                    <PrivateRoute
                      exact
                      path="/profile"
                      component={ShowProfile}
                    />
                    <PrivateRoute
                      exact
                      path="/edit_profile"
                      component={EditProfile}
                    />
                    <PrivateRoute
                      exact
                      path="/delete_profile"
                      component={DeleteProfile}
                    />
                    <PrivateRoute
                      exact
                      path="/annonces/:id"
                      component={AnnoncePage}
                    />
                    <PrivateRoute
                      exact
                      path="/ajouter_annonce"
                      component={AddAnnonce}
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
