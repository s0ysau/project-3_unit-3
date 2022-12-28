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
    </>
  )
}