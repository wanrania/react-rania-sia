import "./assets/tailwind.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Tambahkan ini
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ErrorPage from "./components/ErrorPage"; // Import ErrorPage
import Error400 from "./pages/Error400"; // Tambahkan pages error
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <BrowserRouter> {/* Wrap dengan BrowserRouter */}
      <Routes>
        <Route element={<MainLayout/>}>
              {/* Error Routes */}
              <Route path="/error/400" element={<Error400 />} />
              <Route path="/error/401" element={<Error401 />} />
              <Route path="/error/403" element={<Error403 />} />
              
              {/* Main Routes */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="*" element={<ErrorPage code="404" />} />
        </Route>
        <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route>
            </Routes>

    </BrowserRouter>
  );
}

export default App;
