import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'

export default function SideBar (){


  return(
    <div className="main-section">
      <Menu right>
        <nav className="side-bar">
          <Link to="/power_supply">Power Supply</Link><br/>
          <Link to="/ram">Ram</Link><br/>
          <Link to="/storage">Storage</Link><br/>
          <Link to="/processors">Processors</Link><br/>
          <Link to="/gpu">GPU</Link><br/>
          <Link to="/motherboard">Motherboard</Link><br/>
          <Link to="/cases">Cases</Link><br/>
          <Link to="/cpu_fans">CPU Fans</Link><br/>
          <Link to="/case_fans">Case Fans</Link><br/>
          <Link to="/mouse">Mouse</Link>
        </nav>
      </Menu>
    </div>
  )
}