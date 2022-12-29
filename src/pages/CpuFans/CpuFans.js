import { useState, useEffect } from 'react'
import MultipleDisplay from '../../components/MultipleDisplay'
// import {headers} from '../../../config/apiHeaders'

export default function CpuFans () {
  const [cpuFans, setCpuFans] = useState([])

  const getCpuFans = async () => {
    try {
      const response = await fetch(`https://computer-components-api.p.rapidapi.com/cpu_fan?limit=10&offset=0`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `4df6df70f4msh86e57e37753536ep17d511jsn5179f481eee1`,
            "X-RapidAPI-Host" : "computer-components-api.p.rapidapi.com"
        }
      })
      const data = await response.json()
      setCpuFans(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCpuFans()
  }, [])

  return(
    <>
      <h1>CPU Fans</h1>
      <MultipleDisplay products={cpuFans} />
    </>
  )
}

/*
      {
        cpuFans ? (
          <ul>
            {
              cpuFans.map((cpuFan) => {
                return(
                <li>
                  <img src={cpuFan.img} alt={cpuFan.title} />
                  <h1>{cpuFan.title}</h1>
                  <p>${cpuFan.price}</p>
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
*/