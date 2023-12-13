import React, { useState } from 'react';

const OrderStatusTabs = () => {
    
    const [activeTab, setActiveTab] = useState('pending');

    const tabStyle = {
      padding: '10px 20px',
      cursor: 'pointer',
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
    };
  
    
    const activeTabStyle = {
      ...tabStyle,
      borderBottom: '2px solid blue',
    };
  
   
    const tabsContainerStyle = {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: '10px',
      marginLeft: '260px',
      marginTop: '100px' 
    };
  
    return (
      <div style={tabsContainerStyle}>
        <button
          onClick={() => setActiveTab('pending')}
          style={activeTab === 'pending' ? activeTabStyle : tabStyle}
        >
          Pending
        </button>
        <button
          onClick={() => setActiveTab('accepted')}
          style={activeTab === 'accepted' ? activeTabStyle : tabStyle}
        >
          Accepted
        </button>
        <button
          onClick={() => setActiveTab('awb_created')}
          style={activeTab === 'awb_created' ? activeTabStyle : tabStyle}
        >
          AWB Created
        </button>
        <button
          onClick={() => setActiveTab('ready_to_ship')}
          style={activeTab === 'ready_to_ship' ? activeTabStyle : tabStyle}
        >
          Ready to Ship
        </button>
        
      </div>
    );
  };
  
  export default OrderStatusTabs;