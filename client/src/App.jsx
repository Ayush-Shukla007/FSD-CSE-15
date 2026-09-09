import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./pages/UserLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<UserLayout />} />

        {/* Other pages */}
        <Route path="/mycart" element={<h1>My Cart</h1>} />

        <Route path="/myorders" element={<h1>My Orders</h1>} />

        <Route path="/myprofile" element={<h1>My Profile</h1>} />

        <Route path="/settings" element={<h1>Settings</h1>} />

        <Route path="/logout" element={<h1>Logout</h1>} />

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