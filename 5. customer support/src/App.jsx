import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import ShowTickets from "./components/ShowTickets";
import Table from "./components/Table";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/showticket" element={<ShowTickets />} />
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
