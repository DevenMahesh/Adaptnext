import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import OrdersPage from './components/OrdersPage';
import OrderStatusTabs from './components/OrderStatusTabs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <OrderStatusTabs/>
      <OrdersPage/>
    </div>
  );
}

export default App;
