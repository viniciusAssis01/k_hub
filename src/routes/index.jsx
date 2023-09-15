import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login.jsx";
import { Register } from "../pages/Register/Register.jsx";
import { Dashboard } from "../pages/Dashboard/Dashboard.jsx";
import { ProtectedRoutes } from "../components/ProtectedRoutes/ProtectedRoutes.jsx";
import { TechProvider } from "../providers/TechProvider.jsx";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <TechProvider>
              <Dashboard />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
};
