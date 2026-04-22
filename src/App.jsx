import "./assets/tailwind.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Tambahkan ini
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./layouts/Sidebar";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ErrorPage from "./components/ErrorPage"; // Import ErrorPage
import Error400 from "./pages/Error400"; // Tambahkan pages error
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";

function App() {
  return (
    <BrowserRouter> {/* Wrap dengan BrowserRouter */}
      <div id="app-container" className="bg-gray-100 min-h-screen flex">
        <div id="layout-wrapper" className="flex flex-row flex-1">
          <Sidebar />
          <div id="main-content" className="flex-1 p-4">
            <Header />
            
            <Routes>
              {/* Error Routes */}
              <Route path="/error/400" element={<Error400 />} />
              <Route path="/error/401" element={<Error401 />} />
              <Route path="/error/403" element={<Error403 />} />
              
              {/* Main Routes */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="*" element={<ErrorPage code="404" />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
