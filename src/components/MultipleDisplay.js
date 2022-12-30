export default function MultipleDisplay (props) {
  return (
    <>
      {
        props.products ? (
          <ul>
            {
              props.products.map((product) => {
                return(
                <li key={product.id}>
                  <img src={product.img} alt={product.title} />
                  <h3>{product.brand} - {product.model}</h3>
                  <p>${product.price}</p>
                  <button>Add to Cart</button>
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
    </>
  )
}