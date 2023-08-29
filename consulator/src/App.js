import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "../src/style/global.scss";
import routes from "./router";
import Layout from "./components/Layout/Layout";
import ScrollToTop  from "./components/ScrollToTop/ScrollToTop"
import ScrooltotopOnpageChange from "./components/ScrollToTopOnPageChange/ScrollToTopOnPageChange";
const App = () => {
  const location = useLocation();
  console.log(`location`, location);
  return location.pathname === "/login" ||location.pathname==="/register"? (
   
      <Routes>
        {routes.length > 0 &&
          routes.map((element) => (
            
            <Route
              key={element.id}
              index
              path={element.path}
              element={element.element}
            />
          ))}
      </Routes>
    
  ) : (
    <Layout>
      <ScrooltotopOnpageChange/>
      <ScrollToTop/>
      <Routes>
        {routes.length > 0 &&
          routes.map((element) => (
            <Route
              key={element.id}
              index
              path={element.path}
              element={element.element}
            />
          ))}
      </Routes>
    </Layout>
  );
};

export default App;
