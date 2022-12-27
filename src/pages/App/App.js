import md5 from 'md5';
import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import AuthPage from '../Auth/AuthPage';
import NewOrderPage from '../NewOrder/NewOrderPage';
import OrderHistoryPage from '../OrderHistory/OrderHistoryPage';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Wishlist from '../Wishlist/Wishlist';
import Home from '../Home/Home';
import PowerSupply from '../PowerSupply/PowerSupply';

function App() {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)
  
  const [errorMessage, setErrorMessage] = useState("")

  const fetchState = async (searchTerm) => {
    try {
      const response = await fetch(`api/test`)
      const data = await response.json()
      setState(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchState()
  }, [])

  return (
    <main className="App">
      <>
        { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/wishlist" element={<Wishlist />}/>
            <Route path="/power_supply" element={<PowerSupply />}/>
          </Routes>
          </>
            :
            <AuthPage setUser={setUser}/>
        }
        <Footer />
      </>
  </main>
  );
}

export default App;
