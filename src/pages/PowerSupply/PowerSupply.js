import { useState, useEffect } from 'react'

export default function PowerSupply (props) {
  const [pwrSupplies, setPwrSupplies] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getPwrSupplies = async () => {
    try {
      const response = await fetch(`${props.url}/power_supply?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `${props.apiKey}`,
            "X-RapidAPI-Host" : `${props.host}`
        }
      })
      const data = await response.json()
      setPwrSupplies(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getPwrSupplies({limit, offset})
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
    <>
      <h1>Power Supply</h1>
      {
        pwrSupplies ? (
          <ul>
            {
              pwrSupplies.map((pwrSupply) => {
                return(
                <li key={pwrSupply.id}>
                  <img src={pwrSupply.img} alt={pwrSupply.title} />
                  <h3>{pwrSupply.brand} - {pwrSupply.model} ({pwrSupply.power}, {pwrSupply.efficiency})</h3>
                  <p>${pwrSupply.price}</p>
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
