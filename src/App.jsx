import React, { useState } from 'react';

function App() {
  const [vehicles, setVehicles] = useState([]);
  const [routes, setRoutes] = useState([]);

  // Add functionality to add vehicles and routes
  // Add functionality to assign vehicles to routes
  // Add functionality to track vehicle locations

  return (
    <div>
      <h1>Transport Management System</h1>
      <ul>
        {vehicles.map((vehicle) => (
          <li key={vehicle.id}>{vehicle.name}</li>
        ))}
      </ul>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>{route.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;


