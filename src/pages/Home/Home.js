import { Link } from "react-router-dom";

export default function Home (){
  return(
    <>
      <h1>Home</h1>
      <Link to="/power_supply">Power Supply</Link>
      <Link to="/ram">Ram</Link>
      <Link to="/storage">Storage</Link>
      <Link to="/processors">Processors</Link>
      <Link to="/gpu">GPU</Link>
      <Link to="/motherboard">Motherboard</Link>
      <Link to="/cases">Cases</Link>
      <Link to="/cpu_fans">CPU Fan</Link>
      <Link to="/case_fans">Case Fans</Link>
    </>
  )
}