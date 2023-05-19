import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import Home from "./components/Home.jsx";
import "./index.scss";
import Events from "./pages/Events/Events.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Signin from "./pages/Signin/Signin.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import Cardpage from "./pages/Signup/Cardpage.jsx";
import PasswordComponent from "./pages/Signup/PasswordComponent.jsx";
import Sidebar from "./components/Dashboard/Sidebar.jsx";
import DashboardHome from "./pages/DashboardPages/DashboardHome.jsx";
import DashboardOrder from "./pages/DashboardPages/DashboardOrder.jsx";
import DashboardSettings from "./pages/DashboardPages/DashboardSettings.jsx"
import DashboardReport from "./pages/DashboardPages/DashboardReport.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Events />,
  },

  {
    path: "about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },

  {
    path: "/sign-up",
    element: <Signup />,
  },
  {
    path: "/cardpage",
    element: <Cardpage />,
  },
  {
    path: "/setpassword",
    element: <PasswordComponent />,
  },
  {
    path: "/sidebar",
    element: <Sidebar />,
  },
  {
    path: "/dashboardhome",
    element: <DashboardHome />,
  },
  {
    path: "/dashboardorder",
    element: <DashboardOrder />,
  },
  {
    path: "/dashboardsettings",
    element: <DashboardSettings />,
  },
  {
    path: "/dashboardreport",
    element: <DashboardReport />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
