import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TopLoadingBar from "./components/TopLoadingBar";
import {
  Home,
  NotFound,
  Register,
  Login,
  Dashboard,
  MainDashboard,
  Incomes,
  Expenses,
  Settings,
} from "./pages";
import { PublicRoutes, ProtectedRoutes } from "./components/Guards";
import Education from "./pages/ProtectedPages/Education";
import Scholarship from "./pages/ProtectedPages/Scholarship";
import Assistant from "./pages/ProtectedPages/Assistant";
import Articles from "./pages/ProtectedPages/Articles";
import Courses from "./pages/ProtectedPages/Courses";
import Courses1 from "./components/CoursesComponent/Courses/Courses1";
import Videos from "./pages/ProtectedPages/Videos";
const App = () => {
  return (
    <>
      <TopLoadingBar />
      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        pauseOnHover={false}
        theme="dark"
        transition={Slide}
        toastClassName="font-outfit max-w-xs rounded-lg ml-4 sm:ml-0 mb-2"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<PublicRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard" element={<MainDashboard />} />
            <Route path="/dashboard/incomes" element={<Incomes />} />
            <Route path="/dashboard/expenses" element={<Expenses />} />
            <Route path="/dashboard/settings" element={<Settings />} />
            <Route path="/dashboard/education" element={<Education />} />
            <Route path="/dashboard/scholarship" element={<Scholarship />} />
            <Route path="/dashboard/assistant" element={<Assistant />} />
            <Route path="/dashboard/education/courses" element={<Courses />} />
            <Route path="/dashboard/education/courses/course-1" element={<Courses1 />} />
            <Route path="/dashboard/education/videos" element={<Videos />} />
            <Route path="/dashboard/education/articles" element={<Articles />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
