import { useState, useEffect } from 'react'
import ProductDisplay from '../ProductsDisplay/ProductsDisplay'

export default function Motherboard(props) {
  const [motherboards, setMotherboards] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getMotherboards = async () => {
    try {
      const response = await fetch(`${props.url}/motherboard?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "X-RapidAPI-Key": `${props.apiKey}`,
          "X-RapidAPI-Host": `${props.host}`
        }
      })
      const data = await response.json()
      setMotherboards(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getMotherboards({limit, offset})
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

  return (
    <div className='product-body'>
      <h1>Motherboards</h1>
      {
        motherboards ? (
          <ul className='product-listing-container'>
            {
              motherboards.map((motherboard) => {
                return (
                  <ProductDisplay props={motherboard} />
                )
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
      <div className='button-btns'>
        <button onClick={handlePrevious} className="prev">Previous</button>
        <button onClick={handleNext} className="next">Next</button>
      </div>
    </div>
  )
}


/*
  <li key={motherboard.id}>
    <img src={motherboard.img} alt={motherboard.title} />
    <h3>{motherboard.brand} - {motherboard.model} ({motherboard.formFactor})</h3>
    <p>${motherboard.price}</p>
    <button>Add to Cart</button>
  </li>

*/