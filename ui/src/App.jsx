import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Login, Signup, Dashboard, NotFound, LandingPage } from "./Pages";
import { ProtectedRoutes } from "./Routes";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          }
        ></Route>
        {/* <Route path="/user-report-need" element={<ReportNeed />}></Route> */}
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    )
  );

  return (
    <>
        <RouterProvider router={router} />
        <ToastContainer />
    </>
  );
}

export default App;
