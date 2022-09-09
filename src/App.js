import React from "react";

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./page/HomePage";
import Login from "./page/author/Login";
import Register from "./page/author/Register";
import Profile from "./page/author/Profile";
import ChangePass from "./page/author/ChangePass";
import UploadImg from "./page/post/UploadImg";
import PostDes from "./page/post/PostDes";
import PostHistory from "./page/author/PostHistory";
import ListPost from "./page/post/ListPost";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/post/add">
          <HomePage />
        </Route>
        <Route path="/post/:slug">
          <PostDes />
        </Route>
        <Route path="/upload">
          <UploadImg />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/profile/post-list">
          <PostHistory />
        </Route>
        <Route path="/category/:id">
          <ListPost />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/change-password">
          <ChangePass />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
