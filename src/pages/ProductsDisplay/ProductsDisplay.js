
export default function ProductDisplay({props}) {

  const handleAmazon = () => {
    window.location = `${props.link}`
  }

  return(
    <li key={props.key} className='product-listing-individual'>
      <img src={props.img} alt={props.title} />
      <h3>{props.brand} - {props.model}</h3>
      <p>${props.price}</p>
      {/* <button>Add to Cart</button> */}
      <button onClick={handleAmazon} className="amazon">Buy on Amazon</button>
    </li> 
  )
}