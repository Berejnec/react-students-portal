import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StudentList from "./StudentList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StudentDetails from "./StudentDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404. Page not found.</div>,
    children: [
      {
        path: "students",
        element: <StudentList />,
      },
      {
        path: "students/:studentId",
        element: <StudentDetails />,
      },
      {
        path: "courses",
        element: <div>Courses page</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
