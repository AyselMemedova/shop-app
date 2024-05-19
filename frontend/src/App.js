import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/Routes";
import React, { useEffect, useState } from "react";
import MainContext from "./context/context";
import { HelmetProvider } from "react-helmet-async";
import axios from "axios";
function App() {
  useEffect(() => {
    axios.get("http://localhost:8080/api/exam").then((res) => {
      setProduct(res.data);
    });
  }, []);
  const router = createBrowserRouter(ROUTES);
  const [product, setProduct] = useState([]);
  const context = {
    product, setProduct
  }

  return (
    <>
      <HelmetProvider>
        <MainContext.Provider value={context}>
          <RouterProvider router={router} />
        </MainContext.Provider>
      </HelmetProvider>
    </>
  )
}

export default App;
