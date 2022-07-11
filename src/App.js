import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "pages/Home";
import Details from "pages/Details";
import Checkout from "pages/Checkout";
import "assets/scss/style.scss";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:id" component={Details} />
          <Route exact path="/checkout" component={Checkout} />
          {/* <Route path="/checkout" component={Checkout} />
          <Route path="/example" component={Example} />
          <Route path="*" component={NotFound} /> */}
        </Switch>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
