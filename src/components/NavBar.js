import {Link} from "react-router-dom"

export default function NavBar () {
  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/wishlist">Wishlist</Link>
      &nbsp; | &nbsp;
      <Link to="/orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      &nbsp; | &nbsp;
      <p>Log Out</p>
    </nav>
  )
}