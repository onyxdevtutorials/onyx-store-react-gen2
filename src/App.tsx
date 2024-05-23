import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { Layout, ProductCreate, ProductUpdate } from "./pages";
import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import { Landing, SignIn } from "./pages";

const AdminRoutes = () => (
  <Authenticator>
    <Routes>
      <Route path="/product-create" element={<ProductCreate />} />
      <Route path="/product-update/:id" element={<ProductUpdate />} />
    </Routes>
  </Authenticator>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/admin/*",
        element: <AdminRoutes />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
