import { useState, useEffect } from 'react'

export default function Motherboard(props) {
  const [motherboards, setMotherboards] = useState([])

  const getMotherboards = async () => {
    try {
      const response = await fetch(`${props.url}/motherboard?limit=10&offset=0`, {
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
    getMotherboards()
  }, [])

  return (
    <>
      <h1>Motherboards</h1>
      {
        motherboards ? (
          <ul>
            {
              motherboards.map((motherboard) => {
                return (
                  <li key={motherboard.id}>
                    <img src={motherboard.img} alt={motherboard.title} />
                    <h3>{motherboard.brand} - {motherboard.model} ({motherboard.formFactor})</h3>
                    <p>${motherboard.price}</p>
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
