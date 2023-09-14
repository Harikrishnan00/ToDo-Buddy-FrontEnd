import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import { Home, Signup, Login, ToDo } from "../pages/pages";
import { PrivateRoutes } from "./protectedRoute";

function RouteHandler() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<Home />} />
        <Route index path="/login" element={<Login />} />
        <Route index path="/Signup" element={<Signup />} />
        <Route element={<PrivateRoutes />}>
          <Route index path="/todo" element={<ToDo />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <div className="App">
        <RouterProvider router={route} />
      </div>
    </>
  );
}

const Root = () => {
  return (
    <>
      <div></div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default RouteHandler;
