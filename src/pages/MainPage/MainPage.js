import { Routes, Route } from "react-router-dom"
import {headers, sendProductRequire} from "../../utilites/send-product-request";
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
import Cart from '../Cart/Cart';
import Mouse from '../Mouse/Mouse';

export default function MainPage () {
  const url = `${headers.base_url}`
  const host = `${headers.host}`
  const apiKey = `${headers.apiKey}`

  return (
    <>
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/power_supply" element={<PowerSupply url={url} host={host} apiKey={apiKey}/>}/>
        <Route path="/ram" element={<Ram url={url} host={host} apiKey={apiKey}/>} />
        <Route path="/storage" element={<Storage url={url} host={host} apiKey={apiKey}/>}/>
        <Route path="/processors" element={<Processor url={url} host={host} apiKey={apiKey}/>}/>
        <Route path="/gpu" element={<Gpu url={url} host={host} apiKey={apiKey}/>}/>
        <Route path="/motherboard" element={<Motherboard url={url} host={host} apiKey={apiKey}/>} />
        <Route path="/cases" element={<Case url={url} host={host} apiKey={apiKey}/>}/>
        <Route path="/cpu_fans" element={<CpuFans url={url} host={host} apiKey={apiKey}/>}/>
        <Route path="/case_fans" element={<CaseFans url={url} host={host} apiKey={apiKey}/>}/>
        <Route path="/mouse" element={<Mouse url={url} host={host} apiKey={apiKey}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}
