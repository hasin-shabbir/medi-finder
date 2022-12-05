import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

// Home
const Home = React.lazy(() => import("./components/pages/Home"));
const Cliniclist = React.lazy(() => import("./components/pages/Cliniclist"));
const Clinicdetails = React.lazy(() => import("./components/pages/Clinicdetails"));
const Login = React.lazy(() => import("./components/pages/Login"));
const SignUp = React.lazy(() => import("./components/pages/SignUp"));
// Extra
const Errorpage = React.lazy(() => import("./components/pages/Errorpage"));

// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})


function App() {
  return (
    <Router basename={"/docfind/"}>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Switch>
            {/* Home */}
            <Route exact path="/" component={Home} />
            <Route exact path="/clinic-list" component={Cliniclist} />
            <Route exact path="/clinic-details/:id" component={props => (<Clinicdetails {...props} key={window.location.pathname} />)} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/sign-up" component={SignUp} />
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
