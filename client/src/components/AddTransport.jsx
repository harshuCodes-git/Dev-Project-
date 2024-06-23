import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddTransport = () => {
  const [transport, setTransport] = useState({
    name: "",
    type: "",
    capacity: "",
    status: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTransport({ ...transport, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/transports", transport)
      .then(() => navigate("/"))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Transport</h1>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="type" placeholder="Type" onChange={handleChange} />
      <input name="capacity" placeholder="Capacity" onChange={handleChange} />
      <input name="status" placeholder="Status" onChange={handleChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTransport;
