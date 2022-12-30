import { useState, useEffect } from 'react'
import MultipleDisplay from '../../components/MultipleDisplay'
// import {headers} from '../../../config/apiHeaders'

export default function Processor (props) {
  const [processors, setProcessors] = useState([])

  const getProcessors = async () => {
    try {
      const response = await fetch(`${props.url}/processor?limit=10&offset=0`, {
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
    getProcessors()
  }, [])

  return(
    <>
      <h1>Processors</h1>
      <MultipleDisplay products={processors} />
    </>
  )
}

/*
      {
        processors ? (
          <ul>
            {
              processors.map((processor) => {
                return(
                <li>
                  <img src={processor.img} alt={processor.title} />
                  <h1>{processor.title}</h1>
                  <p>${processor.price}</p>
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
*/