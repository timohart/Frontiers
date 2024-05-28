import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Data from Azure SQL Database</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li> // Replace 'name' with your column name
        ))}
      </ul>
    </div>
  );
}

export default App;
