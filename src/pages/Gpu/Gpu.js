import { useState, useEffect } from 'react'

export default function Gpu(props) {
  const [gpus, setGpus] = useState([])

  const getGpus = async () => {
    try {
      const response = await fetch(`${props.url}/gpu?limit=10&offset=0`, {
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
    getGpus()
  }, [])

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
    </>
  )
}
