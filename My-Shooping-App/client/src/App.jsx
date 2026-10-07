import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserDashboard from "./pages/Userdashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<UserDashboard />} />

        <Route path="/mycart" element={<h1>My Cart</h1>} />

        <Route path="/myorders" element={<h1>My Orders</h1>} />

        <Route path="/settings" element={<h1>Settings</h1>} />

        <Route path="/myprofile" element={<h1>My Profile</h1>} />

        <Route path="/logout" element={<h1>Logout successfully</h1>} />

        <Route path="*" element={<h1>Page Not Found</h1>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;