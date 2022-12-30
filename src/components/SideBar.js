import { Link } from "react-router-dom";

export default function SideBar (){
  return(
    <>
      <h1>Side Bar</h1>
      <Link to="/power_supply">Power Supply</Link><br/>
      <Link to="/ram">Ram</Link><br/>
      <Link to="/storage">Storage</Link><br/>
      <Link to="/processors">Processors</Link><br/>
      <Link to="/gpu">GPU</Link><br/>
      <Link to="/motherboard">Motherboard</Link><br/>
      <Link to="/cases">Cases</Link><br/>
      <Link to="/cpu_fans">CPU Fans</Link><br/>
      <Link to="/case_fans">Case Fans</Link><br/>
    </>
  )
}