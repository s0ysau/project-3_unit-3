import { useState, useEffect } from 'react'
import MultipleDisplay from '../../components/MultipleDisplay'
// import {headers} from '../../../config/apiHeaders'

export default function Motherboard () {
  const [motherboards, setMotherboards] = useState([])

  const getMotherboards = async () => {
    try {
      const response = await fetch(`https://computer-components-api.p.rapidapi.com/motherboard?limit=10&offset=0`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `4df6df70f4msh86e57e37753536ep17d511jsn5179f481eee1`,
            "X-RapidAPI-Host" : "computer-components-api.p.rapidapi.com"
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