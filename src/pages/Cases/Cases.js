import { useState, useEffect } from 'react'

export default function Case (props) {
  const [cases, setCases] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getCases = async () => {
    try {
      const response = await fetch(`${props.url}/case?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `${props.apiKey}`,
            "X-RapidAPI-Host" : `${props.host}`
        }
      })
      const data = await response.json()
      setCases(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getCases({limit, offset})
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
      <h1>Cases</h1>
      {
        cases ? (
          <ul>
            {
              cases.map((item) => {
                return(
                <li key={item.id}>
                  <img src={item.img} alt={item.title} />
                  <h3>{item.brand} - {item.model}, {item.cabinetType}</h3>
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
