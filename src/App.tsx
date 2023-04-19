import React from "react";
import { Route, Routes } from "react-router-dom";
import ShippingAddressInfo from "pages/ShippingAddressInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShippingAddressInfo />} />
    </Routes>
  );
}

export default App;
