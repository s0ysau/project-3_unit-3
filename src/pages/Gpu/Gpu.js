import { useState, useEffect } from 'react'
import MultipleDisplay from '../../components/MultipleDisplay'
// import {headers} from '../../../config/apiHeaders'

export default function Gpu () {
  const [gpus, setGpus] = useState([])

  const getGpus = async () => {
    try {
      const response = await fetch(`https://computer-components-api.p.rapidapi.com/gpu?limit=10&offset=0`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `4df6df70f4msh86e57e37753536ep17d511jsn5179f481eee1`,
            "X-RapidAPI-Host" : "computer-components-api.p.rapidapi.com"
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

  return(
    <>
      <h1>GPU</h1>
      <MultipleDisplay products={gpus} />
    </>
  )
}

/*
      {
        gpus ? (
          <ul>
            {
              gpus.map((gpu) => {
                return(
                <li>
                  <img src={gpu.img} alt={gpu.title} />
                  <h3>{gpu.title}</h3>
                  <p>${gpu.price}</p>
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
*/