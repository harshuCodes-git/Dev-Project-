import React from "react";
import { Route, Routes } from "react-router-dom";
import TransportList from "./components/TransportList";
import AddTransport from "./components/AddTransport";
import EditTransport from "./components/EditTransport";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TransportList />} />
        <Route path="/add" element={<AddTransport />} />
        <Route path="/edit/:id" element={<EditTransport />} />
      </Routes>
    </div>
  );
}

export default App;
