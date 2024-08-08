import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Ticket from "./components/Ticket";
import ShowTickets from "./components/ShowTickets";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addTicket" element={<Ticket />} />
          <Route path="/showticket" element={<ShowTickets />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
