import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SalesPage from "./pages/SalesPage";
import MainLayout from "./layouts/MainLayout";
import Positions from "./components/Positions";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<SalesPage />} />
      <Route path="/dashboard" element={<SalesPage />} />
      <Route path="/all-positions" element={<Positions margin={"mt-28"} />} />
      <Route path="/client" element={<div className="mt-[70px]">Client</div>} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
  // return (
  //   <Router>
  //     <Routes>
  //       {/* Update the path to "*" to handle all sub-routes */}
  //       <Route path="/*" element={<SalesPage />} />
  //     </Routes>
  //   </Router>
  // );
};

export default App;
