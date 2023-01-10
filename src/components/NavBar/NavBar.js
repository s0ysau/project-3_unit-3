import {Link} from "react-router-dom"
import Logout from "../LogOut/LogOut"

export default function NavBar ({user, setUser}) {
  return (
    <>
      <nav className="nav-bar">
        <h1 className="title">MicroParts</h1>
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/wishlist">Wishlist</Link>
        &nbsp; | &nbsp;
        <Link to="/cart">Cart</Link>
        &nbsp; | &nbsp;
        <Logout user={user} setUser={setUser}/>
      </nav>
    </>
  )
}