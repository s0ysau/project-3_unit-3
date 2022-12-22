import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import AuthPage from '../Auth/AuthPage';
import NewOrderPage from '../NewOrder/NewOrderPage';
import OrderHistoryPage from '../OrderHistory/OrderHistoryPage';
import NavBar from '../../components/NavBar';
import FruitsPage from '../Fruits/FruitsPage';

function App() {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)
  const fetchState = async () => {
    try {
      const response = await fetch('api/test')
      const data = await response.json()
      setState(data)
    } catch (err) {
      console.error(err)
    }
  }


  useEffect(() => {
    fetchState()
  }, [])

  return (
    <main className="App">
    
      { user ?
      <>
        <NavBar />
        <Routes>
          <Route path="/fruits" element={<FruitsPage />} />
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
          <Route path="/" element={<NewOrderPage />} />
        </Routes>
        </>
          :
          <AuthPage setUser={setUser}/>
      }
  </main>
  );
}

export default App;
