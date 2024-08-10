import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import CreateAcc from "./pages/CreateAcc";
import Hostel from "./pages/Hostel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAcc />} />
          <Route path="/hostel" element={<Hostel />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
