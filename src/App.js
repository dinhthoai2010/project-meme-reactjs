import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  BrowserRouter,
} from "react-router-dom";

import Routers from "./router";
import { asyFetchMe } from "./store/author/action";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyFetchMe())
  }, []);

  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
}

export default App;
