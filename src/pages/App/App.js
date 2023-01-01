import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import { headers } from "../../utilites/apiHeaders";
import AuthPage from '../Auth/AuthPage';
import NewOrderPage from '../NewOrder/NewOrderPage';
import OrderHistoryPage from '../OrderHistory/OrderHistoryPage';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Wishlist from '../Wishlist/Wishlist';
import Home from '../Home/Home';
import PowerSupply from '../PowerSupply/PowerSupply';
import Ram from '../Ram/Ram';
import Storage from '../Storage/Storage';
import Processor from '../Processors/Processors';
import Gpu from '../Gpu/Gpu';
import Motherboard from '../Motherboard/Motherboard';
import Case from '../Cases/Cases';
import CpuFans from '../CpuFans/CpuFans';
import CaseFans from '../CaseFans/CaseFans';
import SideBar from '../../components/SideBar';
import SingleStorage from '../Storage/SingleStorage';

export default function App() {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)
  // const [product, setProduct] = useState("")
  // const [limit, setLimit] = useState(9)
  // const [offset, setOffset] = useState(0)
  const url = `${headers.base_url}`
  const host = `${headers.host}`
  const apiKey = `${headers.apiKey}`

  
  const fetchState = async () => {
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

  // const getState = async () => {
  //   try {
  //     const response = await fetch(`${url}/${product}?limit=10&offset=0`, {
  //       method: "GET",
  //       headers: {
  //           'Content-Type': 'application/json',
  //           "X-RapidAPI-Key": `${apiKey}`,
  //           "X-RapidAPI-Host" : `${host}`
  //       }
  //     })
  //     const data = await response.json()
  //     setState(data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   getState()
  // }, [])

  // const handleNext = async () => {
  //   setOffset((prev) => (prev += limit));
  // };
  // const handlePrevious = async () => {
  //   setOffset((prev) => (prev -= limit));
  // };

  // const handleClick = async (evt) => {
  //   setProduct(evt.target.value)
  // }


  return (
    <main className="App">
      <>
        { user ?
          <>
            <NavBar />
            <SideBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/wishlist" element={<Wishlist />}/>
              <Route path="/power_supply" element={<PowerSupply url={url} host={host} apiKey={apiKey}/>}/>
              <Route path="/ram" element={<Ram url={url} host={host} apiKey={apiKey}/>} />
              <Route path="/storage" element={<Storage url={url} host={host} apiKey={apiKey}/>}/>
              <Route path="/storage/:id" element={<SingleStorage />}/>
              <Route path="/processors" element={<Processor url={url} host={host} apiKey={apiKey}/>}/>
              <Route path="/gpu" element={<Gpu url={url} host={host} apiKey={apiKey}/>}/>
              <Route path="/motherboard" element={<Motherboard url={url} host={host} apiKey={apiKey}/>} />
              <Route path="/cases" element={<Case url={url} host={host} apiKey={apiKey}/>}/>
              <Route path="/cpu_fans" element={<CpuFans url={url} host={host} apiKey={apiKey}/>}/>
              <Route path="/case_fans" element={<CaseFans url={url} host={host} apiKey={apiKey}/>}/>
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


