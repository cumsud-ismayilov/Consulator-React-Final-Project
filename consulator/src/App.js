import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "../src/style/global.scss"
import routes from "./router";

const App = () => {
  const location = useLocation();
  console.log(`location`, location);
  return (
    <Routes>
      {routes.length > 0 &&
        routes.map((element) => (
          <Route key ={element.id} index path={element.path} element={element.element} />
        ))}
    </Routes>
  );
};

export default App;
