import { useState, useEffect } from 'react'

export default function Processor (props) {
  const [processors, setProcessors] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getProcessors = async () => {
    try {
      const response = await fetch(`${props.url}/processor?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `${props.apiKey}`,
            "X-RapidAPI-Host" : `${props.host}`
        }
      })
      const data = await response.json()
      setProcessors(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getProcessors({limit, offset})
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
      <h1>Processors</h1>
      {
        processors ? (
          <ul>
            {
              processors.map((processor) => {
                return(
                <li key={processor.id}>
                  <img src={processor.img} alt={processor.title} />
                  <h3>{processor.brand} - {processor.model} {processor.speed}</h3>
                  <p>${processor.price}</p>
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
