import React from "react";

import { Routes, Route } from "react-router-dom";
import PlanYourTrip from "../pages/PlanYourTrip";
import DetailsPage from "../pages/DetailsPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PlanYourTrip />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
};

export default AllRoutes;
