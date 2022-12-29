import { useState, useEffect } from 'react'
import MultipleDisplay from '../../components/MultipleDisplay'
// import {headers} from '../../../config/apiHeaders'

export default function PowerSupply () {
  const [pwrSupplies, setPwrSupplies] = useState([])

  const getPwrSupplies = async () => {
    try {
      const response = await fetch(`https://computer-components-api.p.rapidapi.com/power_supply?limit=10&offset=0`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `4df6df70f4msh86e57e37753536ep17d511jsn5179f481eee1`,
            "X-RapidAPI-Host" : "computer-components-api.p.rapidapi.com"
        }
      })
      const data = await response.json()
      setPwrSupplies(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPwrSupplies()
  }, [])

  return(
    <>
      <h1>Power Supply</h1>
      <MultipleDisplay products={pwrSupplies} />
    </>
  )
}

/*
      {
        pwrSupplies ? (
          <ul>
            {
              pwrSupplies.map((pwrSupply) => {
                return(
                <li>
                  <img src={pwrSupply.img} alt={pwrSupply.title} />
                  <h1>{pwrSupply.title}</h1>
                  <p>${pwrSupply.price}</p>
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
*/