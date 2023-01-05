import { useState, useEffect } from 'react'


export default function CpuFans (props) {
  const [cpuFans, setCpuFans] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getCpuFans = async () => {
    try {
      const response = await fetch(`${props.url}/cpu_fan?${limit}&offset=${offset}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `${props.apiKey}`,
            "X-RapidAPI-Host" : `${props.host}`
        }
      })
      const data = await response.json()
      setCpuFans(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    setLoading(true)
    getCpuFans({limit, offset})
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
      <h1>CPU Fans</h1>
      {
        cpuFans ? (
          <ul>
            {
              cpuFans.map((cpuFan) => {
                return(
                <li key={cpuFan.id}>
                  <img src={cpuFan.img} alt={cpuFan.title} />
                  <h3>{cpuFan.brand} - {cpuFan.model} ({cpuFan.rpm})</h3>
                  <p>${cpuFan.price}</p>
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
