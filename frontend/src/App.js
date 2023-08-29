import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import HomePage from "./Components/HomePage";
import UserAuth from "./Components/UserAuth";

const App = () => {
  return (
    <div style={{ padding: "10px" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/UserAuth" element={<UserAuth />} />
      </Routes>
    </div>
  );
};

export default App;
