import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const TransportList = () => {
  const [transports, setTransports] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/transports")
      .then((response) => setTransports(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/transports/${id}`)
      .then(() =>
        setTransports(transports.filter((transport) => transport._id !== id))
      )
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Transport List</h1>
      <Link to="/add">Add Transport</Link>
      <ul>
        {transports.map((transport) => (
          <li key={transport._id}>
            {transport.name} - {transport.type} - {transport.capacity} -{" "}
            {transport.status}
            <Link to={`/edit/${transport._id}`}>Edit</Link>
            <button onClick={() => handleDelete(transport._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransportList;
