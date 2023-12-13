import React from 'react';
import { faBook, faTruck, faShoppingbag, faPencil, faShareAltSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const linkStyle = {
        padding: '10px 15px',
        textDecoration: 'none',
        fontSize: '16px',
        color: '#333', 
        display: 'block', 
        borderBottom: '1px solid #ddd', 
      };
  return (
    <nav style={{ backgroundColor: '#f0f0f0', padding: '10px' }}>
      <div style={{
      width: '250px', 
      height: '100vh', 
      position: 'fixed', 
      zIndex: '1', 
      top: '0',
      left: '0', 
      backgroundColor: '#f0f0f0', 
      overflowX: 'hidden', 
      paddingTop: '10px',
      paddingLeft:'10px' 
    }}>
      <button style={{
        padding: '10px',
        cursor: 'pointer',
        width: '100%', 
        textAlign: 'left', 
        border: 'none', 
        outline: 'none', 
        backgroundColor: '#f0f0f0',
      }}>☰ Dashboard</button>
      <a href="/inventory" style={linkStyle}><FontAwesomeIcon icon={faPencil} /><span style={{ paddingLeft: '10px' }}>Inventory</span></a>
      <a href="/orders" style={linkStyle}><FontAwesomeIcon icon={faBook} /><span style={{ paddingLeft: '10px' }}>Orders</span></a>
      <a href="/shipping" style={linkStyle}><FontAwesomeIcon icon={faTruck} /><span style={{ paddingLeft: '10px' }}>Shipping</span></a>
      <a href="/channel" style={linkStyle}><FontAwesomeIcon icon={faShareAltSquare} /><span style={{ paddingLeft: '10px' }}>Channel</span></a>
      
     
    </div>
    </nav>
  );
};

export default Navbar;