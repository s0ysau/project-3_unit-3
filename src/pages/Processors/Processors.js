import { useState, useEffect } from 'react'
// import {headers} from '../../../config/apiHeaders'

export default function Processor () {
  const [processors, setProcessors] = useState([])

  const getProcessors = async () => {
    try {
      const response = await fetch(`https://computer-components-api.p.rapidapi.com/processor?limit=10&offset=0`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `4df6df70f4msh86e57e37753536ep17d511jsn5179f481eee1`,
            "X-RapidAPI-Host" : "computer-components-api.p.rapidapi.com"
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
      {
        processors ? (
          <ul>
            {
              processors.map((processor) => {
                return(
                <li>
                  {processor.brand}
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
    </>
  )
}