import React from "react";
import { Route, Routes } from "react-router-dom";

const ShippingAddressInfo = React.lazy(
  () => import("pages/ShippingAddressInfo")
);

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <React.Suspense fallback={<>Loadig...</>}>
            <ShippingAddressInfo />
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default App;
