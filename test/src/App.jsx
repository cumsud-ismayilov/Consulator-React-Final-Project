import React from "react";
import { routes } from "../router";
import { RouterProvider } from "react-router-dom";
const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
