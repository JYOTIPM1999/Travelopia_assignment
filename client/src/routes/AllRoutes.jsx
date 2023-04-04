import React from "react";

import { Routes, Route } from "react-router-dom";
import PlanYourTrip from "../pages/PlanYourTrip";
import DetailsPage from "../pages/DetailsPage";

//AllRoutes is responsible for creating routes for different page.

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PlanYourTrip />} />
      <Route path="/details" element={<DetailsPage />} />
    </Routes>
  );
};

export default AllRoutes;
