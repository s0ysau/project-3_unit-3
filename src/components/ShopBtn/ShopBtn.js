import { Link } from "react-router-dom";

export default function ShopBtn (props){
  return(
    <form>
      <button>Add To Wishlist</button>
      <button>Add To Cart</button>
      <Link href={`${props.link}`}>Buy on Amazon</Link>
    </form>
  )
}