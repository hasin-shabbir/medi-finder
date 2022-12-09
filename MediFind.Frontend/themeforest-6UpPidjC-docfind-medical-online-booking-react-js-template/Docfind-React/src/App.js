import React, { Suspense, useLayoutEffect } from "react";
import {
  HashRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";

// Home
const Home = React.lazy(() => import("./components/pages/Home"));
const Cliniclist = React.lazy(() => import("./components/pages/Cliniclist"));
const Clinicdetails = React.lazy(() =>
  import("./components/pages/Clinicdetails")
);
const SearchResults = React.lazy(() =>
  import("./components/pages/SearchResults")
);
const SavedList = React.lazy(() => import("./components/pages/SavedList"));
const Login = React.lazy(() => import("./components/pages/Login"));
const SignUp = React.lazy(() => import("./components/pages/SignUp"));
const AddDrug = React.lazy(() => import("./components/pages/AddDrug"));
const EditDrug = React.lazy(() => import("./components/pages/EditDrug"));
const UserPage = React.lazy(() => import("./components/pages/UserPage"));
const AdminPage = React.lazy(() => import("./components/pages/AdminPage"));
const QRcode = React.lazy(() => import("./components/pages/QRcode"));

// Extra
const Errorpage = React.lazy(() => import("./components/pages/Errorpage"));

// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
});

function App() {
  return (
    <Router basename={"/medi-finder"}>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Switch>
            {/* Home */}
            <Route exact path="/" component={Home} />
            <Route exact path="/clinic-list" component={Cliniclist} />
            <Route exact path="/search-results" component={SearchResults} />
            <Route exact path="/saved-list" component={SavedList} />
            <Route
              exact
              path="/drug-details/:id"
              component={(props) => (
                <Clinicdetails {...props} key={window.location.pathname} />
              )}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
            <Route exact path="/add-drug" component={AddDrug} />
            <Route exact path="/edit-drug" component={EditDrug} />
            <Route exact path="/QR-code/:id" component={QRcode} />
            <Route exact path="/user-page" component={UserPage} />
            <Route exact path="/admin-page" component={AdminPage} />

            {/* Extra */}
            <Route exact path="/error-page" component={Errorpage} />
            <Route exact component={Errorpage} />
          </Switch>
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
