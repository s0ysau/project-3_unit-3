import { useState, useEffect } from 'react'

export default function Gpu(props) {
  const [gpus, setGpus] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getGpus = async () => {
    try {
      const response = await fetch(`${props.url}/gpu?limit=${limit}&offset=${offset}`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "X-RapidAPI-Key": `${props.apiKey}`,
          "X-RapidAPI-Host": `${props.host}`
        }
      })
      const data = await response.json()
      setGpus(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getGpus({limit, offset})
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
    <>
      <h1>GPU</h1>
      {
        gpus ? (
          <ul>
            {
              gpus.map((gpu) => {
                return (
                  <li key={gpu.id}>
                    <img src={gpu.img} alt={gpu.title} />
                    <h3>{gpu.brand} - {gpu.model}</h3>
                    <p>${gpu.price}</p>
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
