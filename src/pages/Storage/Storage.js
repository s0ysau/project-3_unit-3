import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import SingleStorage from './SingleStorage';


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
    <>
      <h1>Storage</h1>
      {
        storage ? (
          <ul>
            {
              storage.map((item) => {
                return(
                <li key={item.id}>
                  <Link to={`/storage/${item.id}`} >
                    <img src={item.img} alt={item.title} />
                    <h3>{item.brand} - {item.rpm} {item.type}</h3>
                  </Link>
                  <p>${item.price}</p>
                  <button>Add to Cart</button>
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </>
  )
}
