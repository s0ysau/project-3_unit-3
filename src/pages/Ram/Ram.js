import { useState, useEffect } from 'react'
import MultipleDisplay from '../../components/MultipleDisplay'
// import {headers} from '../../../config/apiHeaders'

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
                  <img src={ram.img} alt={ram.title} />
                  <h3>{ram.brand} - {ram.size} ({ram.quantity})</h3>
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

/*
      {
        rams ? (
          <ul>
            {
              rams.map((ram) => {
                return(
                <li>
                  <img src={ram.img} alt={ram.title} />
                  <h1>{ram.title}</h1>
                  <p>${ram.price}</p>
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
*/