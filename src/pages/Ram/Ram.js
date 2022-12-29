import { useState, useEffect } from 'react'
import MultipleDisplay from '../../components/MultipleDisplay'
// import {headers} from '../../../config/apiHeaders'

export default function Ram () {
  const [rams, setRams] = useState([])

  const getRams = async () => {
    try {
      const response = await fetch(`https://computer-components-api.p.rapidapi.com/ram?limit=10&offset=0`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `4df6df70f4msh86e57e37753536ep17d511jsn5179f481eee1`,
            "X-RapidAPI-Host" : "computer-components-api.p.rapidapi.com"
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
      <MultipleDisplay products={rams} />
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