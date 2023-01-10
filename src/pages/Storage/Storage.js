import { useState, useEffect } from 'react'
import ProductDisplay from '../ProductsDisplay/ProductsDisplay'


export default function Storage (props) {
  const [storage, setStorage] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  // const [cart, setCart] = useState(null)

  const getStorage = async () => {
    try {
      const response = await fetch(`${props.url}/storage?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `${props.apiKey}`,
            "X-RapidAPI-Host" : `${props.host}`
        }
      })
      const data = await response.json()
      setStorage(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getStorage({limit, offset})
  }, [limit, offset])

  const handleNext = async () => {
    setOffset((prev) => (prev += limit));
  };
  const handlePrevious = async () => {
    if (offset === 0){
      return
    } else {
    setOffset((prev) => (prev -= limit));
    }
  };
  
  // const handleAddToCart = async ({item.id}) => {
  //   const cart = await ordersAPI.getCart()
  //   setCart(cart)
  // }

  return(
    <div className='product-body'>
      <h1>Storage</h1>
      {
        storage ? (
          <ul className='product-listing-container'>
            {
              storage.map((item) => {
                return(
                  <ProductDisplay props={item} />
                )
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  )
}
