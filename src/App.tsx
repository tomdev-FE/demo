import React from "react";
import { Route, Routes } from "react-router-dom";
import ShippingForm from "pages/ShippingAddressInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShippingForm />} />
    </Routes>
  );
}

export default App;
