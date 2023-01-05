import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom"
import {headers, sendProductRequire} from "../../utilites/send-product-request";
import AuthPage from '../Auth/AuthPage';
import OrderHistoryPage from '../OrderHistory/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
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
import SideBar from '../../components/SideBar/SideBar';
import SingleStorage from '../Storage/SingleStorage';
import Cart from '../Cart/Cart';
import Mouse from '../Mouse/Mouse';
import SingleRam from '../Ram/SingleRam';
import Category from '../Category/Category'

export default function App() {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)
  // const [product, setProduct] = useState("")
  // const [limit, setLimit] = useState(9)
  // const [offset, setOffset] = useState(0)
  const url = `${headers.base_url}`
  const host = `${headers.host}`
  const apiKey = `${headers.apiKey}`


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
            <NavBar user={user} setUser={setUser}/>
            <SideBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart/>} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/wishlist" element={<Wishlist />}/>
              <Route path="/power_supply" element={<PowerSupply url={url} host={host} apiKey={apiKey}/>}/>
              <Route path="/ram" element={<Ram url={url} host={host} apiKey={apiKey}/>} />
              <Route path="/ram/:id" element={<SingleRam />} />
              <Route path="/storage" element={<Storage url={url} host={host} apiKey={apiKey}/>}/>
              <Route path="/storage/:id" element={<SingleStorage />}/>
              <Route path="/processors" element={<Processor url={url} host={host} apiKey={apiKey}/>}/>
              <Route path="/gpu" element={<Gpu url={url} host={host} apiKey={apiKey}/>}/>
              <Route path="/motherboard" element={<Motherboard url={url} host={host} apiKey={apiKey}/>} />
              <Route path="/cases" element={<Case url={url} host={host} apiKey={apiKey}/>}/>
              <Route path="/cpu_fans" element={<CpuFans url={url} host={host} apiKey={apiKey}/>}/>
              <Route path="/case_fans" element={<CaseFans url={url} host={host} apiKey={apiKey}/>}/>
              <Route path="/mouse" element={<Mouse url={url} host={host} apiKey={apiKey}/>}/>
              <Route path="/category/:product" element={<Category /> }/>
            </Routes>
            <Footer />
          </>
            :
            <AuthPage setUser={setUser}/>
        }
        
      </>
  </main>
  );
}


