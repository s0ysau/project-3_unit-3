import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import SingleRam from './SingleRam'

export default function Ram (props) {
  const [rams, setRams] = useState([])

  const getRams = async () => {
    try {
      const response = await fetch(`${props.url}/ram?limit=10&offset=0`, {
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
    getRams()
  }, [])

  return(
    <>
      <h1>Ram</h1>
      {
        rams ? (
          <ul>
            {
              rams.map((ram) => {
                return(
                <li key={ram.id}>
                    <Link to={`/ram/${ram.id}`} ram={ram}>
                      <img src={ram.img} alt={ram.title} />
                      <h3>{ram.brand} - {ram.size} ({ram.quantity})</h3>
                    </Link>
                  <p>${ram.price}</p>
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
