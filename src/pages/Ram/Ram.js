import { useState, useEffect } from 'react'
import ProductDisplay from '../ProductsDisplay/ProductsDisplay'

export default function Ram (props) {
  const [rams, setRams] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getRams = async () => {
    try {
      const response = await fetch(`${props.url}/ram?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `${props.apiKey}`,
            "X-RapidAPI-Host" : `${props.host}`
        }
      })
      const data = await response.json()
      setRams(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getRams({limit, offset})
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

  return(
    <div className='product-body'>
      <h1>Ram</h1>
      {
        rams ? (
          <ul className='product-listing-container'>
            {
              rams.map((ram) => {
                return(
                  <ProductDisplay props={ram} />
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

/*
  <Link to={`/ram/${ram.id}`} ram={ram}>
    <img src={ram.img} alt={ram.title} />
    <h3>{ram.brand} - {ram.size} ({ram.quantity})</h3>
  </Link>
  <p>${ram.price}</p>
  <button>Add to Cart</button>
*/