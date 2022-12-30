import { useState, useEffect } from 'react'
import MultipleDisplay from '../../components/MultipleDisplay'
// import {headers} from '../../../config/apiHeaders'

export default function PowerSupply (props) {
  const [pwrSupplies, setPwrSupplies] = useState([])

  const getPwrSupplies = async () => {
    try {
      const response = await fetch(`${props.url}/power_supply?limit=10&offset=0`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `${props.apiKey}`,
            "X-RapidAPI-Host" : `${props.host}`
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