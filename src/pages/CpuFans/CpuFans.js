import { useState, useEffect } from 'react'
import MultipleDisplay from '../../components/MultipleDisplay'
// import {headers} from '../../../config/apiHeaders'

export default function CpuFans (props) {
  const [cpuFans, setCpuFans] = useState([])

  const getCpuFans = async () => {
    try {
      const response = await fetch(`${props.url}/cpu_fan?limit=10&offset=0`, {
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
    getCpuFans()
  }, [])

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