import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AuthRootComponent from "./components/auth";
import PrivateRoute from './utils/privateRouter'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="login" element={<AuthRootComponent />} />
        <Route path="register" element={<AuthRootComponent />} />
      </Routes>
    </div>
  );
}

export default App;
