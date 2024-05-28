import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch items from the backend when the component mounts
    const fetchItems = async () => {
      try {
        const response = await axios.get('/api/items');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleDeleteItem = async (id) => {
    // Delete item with specified id from the backend
    try {
      await axios.delete(`/api/items/${id}`);
      // Remove the deleted item from the local state
      setItems(items.filter(item => item.id !== id));
      // Optionally, show a success message or update UI
      alert('Item deleted successfully');
    } catch (error) {
      // Handle error (e.g., show error message, log error)
      console.error('Error deleting item:', error);
      alert('Error deleting item');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.type} - {item.description} 
            <button onClick={() => handleDeleteItem(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
