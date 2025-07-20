import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./Pages/Home";
import CountriesDetailPage from "./Pages/CountriesDetailsPage";
import NotFound from "./Pages/NotFound";
import "./index.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="country/:code" element={<CountriesDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
