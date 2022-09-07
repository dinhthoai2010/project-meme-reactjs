import React from "react";

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./layout/Author/Footer";
import HomePage from "./page/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/post/slug">
          <HomePage />
        </Route>
        <Route path="/post/add">
          <HomePage />
        </Route>
        <Route path="/login">
          <HomePage />
        </Route>
        <Route path="/register">
          <HomePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
        <Footer />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
