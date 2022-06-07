import React, { Fragment } from 'react';
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";
import Home from './components/home/Home';
import ProductHistory from './components/history/ProductHistory';




function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/history/:id" element={<ProductHistory />} />
        
        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
    </Fragment>
  );
}

export default App;
