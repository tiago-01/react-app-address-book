import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages";
import Settings from "../pages/settings";

function MyRouters() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        {/* <Route path="*">
          <NoRoute />
        </Route> */}
      </Routes>
    </Router>
  );
}
export default MyRouters;
