import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import Signup from "./components/login&Signup/Signup";
import { RoleAuthProvider } from "./context/RoleAuth";
import Dashboard from "./components/Pages/Dashboard";
import Login from "./components/login&Signup/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import ReportNeed from "./components/Forms/ReportNeed";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/user-report-need" element={<ReportNeed />}></Route>
      </Route>
    )
  );

  return (
    <>
      <RoleAuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </RoleAuthProvider>
    </>
  );
}

export default App;
