import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditTransport = () => {
  const [transport, setTransport] = useState({
    name: "",
    type: "",
    capacity: "",
    status: "",
  });
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/transports/${id}`)
      .then((response) => setTransport(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleChange = (e) => {
    setTransport({ ...transport, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/transports/${id}`, transport)
      .then(() => history.push("/"))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit Transport</h1>
      <input
        name="name"
        value={transport.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        name="type"
        value={transport.type}
        placeholder="Type"
        onChange={handleChange}
      />
      <input
        name="capacity"
        value={transport.capacity}
        placeholder="Capacity"
        onChange={handleChange}
      />
      <input
        name="status"
        value={transport.status}
        placeholder="Status"
        onChange={handleChange}
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditTransport;
