import React from "react";
import { createBrowserHistory } from "history";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from "pages/Home";
import Checkout from "pages/Checkout";
import NotFound from "pages/404"
import "assets/scss/style.scss";
import DetailPage from "pages/DetailPage";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <Routes history={history} basename={process.env.PUBLIC_URL}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/details/:id" element={<DetailPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
