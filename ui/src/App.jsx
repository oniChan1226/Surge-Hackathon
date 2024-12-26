import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Layout, DashboardLayout } from "./Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Signin, Signup, Dashboard, NotFound } from "./Pages";
import { ProtectedRoutes } from "./Routes";
import 'typeface-roboto'
import { ReportsTable } from "./components/Dashboard";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Signin />}></Route>
        {/* <Route index element={<Dashboard />}></Route> */}
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/dashboard"
          element={<ProtectedRoutes>
            <DashboardLayout/>
          </ProtectedRoutes>}
        >
          <Route index element={<Dashboard />}></Route>
          <Route path="individual/reports" element={<ReportsTable />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
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
