import "./App.css";
import { Authenticator } from "@aws-amplify/ui-react";
import { ProductCreate } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";

const AdminRoutes = () => (
  <Routes>
    <Route path="/product-create" element={<ProductCreate />} />
  </Routes>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route
          path="/admin/*"
          element={
            <Authenticator>
              <AdminRoutes />
            </Authenticator>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
