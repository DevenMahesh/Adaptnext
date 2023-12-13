import React, { useState } from 'react';
import { Orders } from '../data/Orders';
import { faBook, faTruck, faShoppingBag, faShareAltSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const OrderRow = ({ order }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const cellStyle = {
    border: '1px solid #ddd', 
    padding: '8px', 
  };

  
  const dropdownMenuStyle = {
    display: showDropdown ? 'block' : 'none',
    position: 'absolute',
    backgroundColor: '#f9f9f9',
    minWidth: '160px',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 1
  };

  const dropdownButtonStyle = {
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '5px 10px',
    margin: '0',
    fontSize: '16px',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center'
  };
  

  return (
    <tr>
      <td style={cellStyle}><FontAwesomeIcon style={{width:'50%'}} icon={faShareAltSquare} /></td>
      <td style={cellStyle}>{order.orderNo}</td>
      <td style={cellStyle}>{order.orderDate}</td>
      <td style={cellStyle}>{order.city}</td>
      <td style={cellStyle}>{order.customerName}</td>
      <td style={cellStyle}>{order.orderValue}</td>
      <td style={cellStyle}>
        <button style={{
          backgroundColor: 'green', 
          color: 'white', 
          border: '1px solid darkgreen',
          padding: '5px 10px', 
          cursor: 'pointer', 
          borderRadius: '5px', 
        }}>
          {order.status}
        </button>
      </td>
      <td style={cellStyle}>
        <div style={{ position: 'relative' }}>
          <button onClick={toggleDropdown} style={dropdownButtonStyle}>
            Actions <span>▼</span>
          </button>
          <div style={dropdownMenuStyle}>
            <a href="#view" style={{ padding: '10px', display: 'block', textDecoration: 'none', color: 'black' }}>View</a>
            <a href="#edit" style={{ padding: '10px', display: 'block', textDecoration: 'none', color: 'black' }}>Edit</a>
            <a href="#delete" style={{ padding: '10px', display: 'block', textDecoration: 'none', color: 'black' }}>Delete</a>
          </div>
        </div>
      </td>
    </tr>
  );
};

const OrdersPage = () => {
  return (
    <div style={{ margin: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h1>Orders</h1>
        <button style={{
    backgroundColor: '#4CAF50', 
    color: 'white',
    padding: '10px 20px', 
    border: 'none', 
    borderRadius: '5px',
    cursor: 'pointer', 
    fontSize: '16px', 
    fontWeight: 'bold', 
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', 
    transition: '0.3s', 
    margin: '10px' 
}}>Refresh</button>
      </div>
      <table style={{ width: '90%', textAlign: 'left', marginLeft: '250px'}}>
        <thead>
          <tr>
            <th>Channel</th>
            <th>Order No</th>
            <th>Order Date</th>
            <th>City</th>
            <th>Customer Name</th>
            <th>Order Value</th>
            <th>Status</th>
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {Orders.map(order => (
            <OrderRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;
