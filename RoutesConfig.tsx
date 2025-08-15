import React, { type ReactElement } from "react";

export interface AppRoute {
  link: string;        // URL ("" for index route / home page)
  title: string;       // link titel i navbars
  component: ReactElement; // Page component
  showInNavbar?: boolean;  // false hvis den ikke skal vises i navbar
}

// Public pages
import Home from "./src/pages/Home";
import About from "./src/pages/About";
import Hooks from "./src/pages/Hooks";
import Form from "./src/pages/Form";
import Login from "./src/pages/Login";
import Unauthorized from "./src/pages/Unauthorized";
import NotFound from "./src/pages/NotFound";

// Admin pages
import AdminDashboard from "./src/admin/AdminDashboard";
import AdminPage from "./src/admin/AdminPage";

// Public routes
export const publicRoutes: AppRoute[] = [
  { link: "", title: "Home", component: <Home /> },
  { link: "about", title: "About", component: <About /> },
  { link: "hooks", title: "Hooks", component: <Hooks /> },
  { link: "form", title: "Form", component: <Form /> },
  { link: "login", title: "Login", component: <Login /> },
  { link: "unauthorized", title: "Unauthorized", component: <Unauthorized />, showInNavbar: false },
  { link: "*", title: "NotFound", component: <NotFound />, showInNavbar: false },
];

// Admin routes
export const adminRoutes: AppRoute[] = [
  { link: "admindashboard", title: "Dashboard", component: <AdminDashboard /> },
  { link: "adminpage", title: "Page", component: <AdminPage /> },
];
