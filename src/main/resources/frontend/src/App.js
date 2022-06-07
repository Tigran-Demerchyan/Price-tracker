import React, { Fragment } from 'react';
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import Home from './components/home/Home';




function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
