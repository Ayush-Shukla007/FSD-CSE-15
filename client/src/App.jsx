import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./pages/UserLayout";
import Login from './components/Login'
import Logout from './components/Logout'
function App() {
  return (
    <BrowserRouter>
      <Routes>

       <Route path="/" element={<Login />} />
        {/* Home */}
        <Route path="/user" element={<UserLayout />} />

        {/* Other pages */}
        <Route path="mycart" element={<h1>My Cart</h1>} />

        <Route path="/myorders" element={<h1>My Orders</h1>} />

        <Route path="/myprofile" element={<h1>My Profile</h1>} />

        <Route path="/settings" element={<h1>Settings</h1>} />

        <Route path="/logout" element={<Logout />} />

        {/* 404 */}
        <Route
          path="*"
          element={<h1>404 - Page Not Found</h1>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;