import { useState, useEffect } from 'react'
import MultipleDisplay from '../../components/MultipleDisplay'
// import {headers} from '../../../config/apiHeaders'

export default function Motherboard (props) {
  const [motherboards, setMotherboards] = useState([])

  const getMotherboards = async () => {
    try {
      const response = await fetch(`${props.url}/motherboard?limit=10&offset=0`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `${props.apiKey}`,
            "X-RapidAPI-Host" : `${props.host}`
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

  return(
    <>
      <h1>Motherboards</h1>
      <MultipleDisplay products={motherboards} />
    </>
  )
}

/*
{
  motherboards ? (
    <ul>
      {
        motherboards.map((motherboard) => {
          return(
          <li>
            <img src={motherboard.img} alt={motherboard.title} />
            <h1>{motherboard.title}</h1>
            <p>${motherboard.price}</p>
          </li>)
        })
      }
    </ul>
  ) : <h1>Nothing to Show</h1>
}
*/