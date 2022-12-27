import { useState, useEffect } from 'react'
const headers = require('../../../config/apiHeaders')

export default function PowerSupply () {
  const [pwrSupplies, setPwrSupplies] = useState([])

  const getPwrSupplies = async () => {
    try {
      const response = await fetch(`${headers.base_url}/power_supply?limit=10&offset=0`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `${headers.apiKey}`,
            "X-RapidAPI-Host" : `${headers.host}`
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
      {
        pwrSupplies ? (
          <ul>
            {
              pwrSupplies.map((pwrSupply) => {
                return(
                <li>
                  {pwrSupply.brand}
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
    </>
  )
}