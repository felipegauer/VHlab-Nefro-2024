import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Navbar2 from "./Components/Navbar/Navbar2.jsx";
import { PacientProvyder } from "./Context/PacientContext.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import HomePage from "./pages/HomePage.jsx";
import PacientPage from "./pages/PacientPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import GraphPage from "./pages/GraphPage.jsx";
import DataSetPage from "./pages/DataSetPage.jsx";
import { DatasetProvyder } from "./Context/DatasetContent.jsx";
import { ExamInfoProvyder } from "./Context/ExamsInfoContext";
import { AnnotationContext, AnnotationProvyder } from "./Context/AnnotationContext";
import CustomPacientPage from "./pages/CustomPacientPage.jsx";
import AnnotationPage from "./pages/AnnotationsPage";

const Layout = () => (
  <>
    <Navbar2 />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/paciente/:dataset/:codigo",
        element: (
          <PacientPage />
        ),
      },
      {
        path: "/sobre",
        element: <AboutPage />,
      },
      {
        path: "/graficos",
        element: <GraphPage />,
      },
      {
        path: "/dataset",
        element: <DataSetPage />,
      },
      {
        path: "/anotacoes",
        element: <AnnotationPage/>
      },
      {
        path: "/test",
        element: <CustomPacientPage />
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DatasetProvyder>
      <PacientProvyder>
        <ExamInfoProvyder>
          <AnnotationProvyder>
            <RouterProvider router={router} />
          </AnnotationProvyder>
        </ExamInfoProvyder>
      </PacientProvyder>
    </DatasetProvyder>
  </StrictMode>
);
