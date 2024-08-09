import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import CreateAcc from "./pages/CreateAcc";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<CreateAcc />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
