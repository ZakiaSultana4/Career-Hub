import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import JObDetails from "./components/JobDetails/JObDetails";
import Statictis from "./components/Statictis";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/public/categories.json"),
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/Statictis",
        element: <Statictis/>,
      },
      {
        path: "/job/:id",
        element: <JObDetails></JObDetails>,
        loader: () => fetch("/jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
