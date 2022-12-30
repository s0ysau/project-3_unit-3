import { useState, useEffect } from 'react'
import MultipleDisplay from '../../components/MultipleDisplay'
// import {headers} from '../../../config/apiHeaders'

export default function Case (props) {
  const [cases, setCases] = useState([])

  const getCases = async () => {
    try {
      const response = await fetch(`${props.url}/case?limit=10&offset=0`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `${props.apiKey}`,
            "X-RapidAPI-Host" : `${props.host}`
        }
      })
      const data = await response.json()
      setCases(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCases()
  }, [])

  return(
    <>
      <h1>Cases</h1>
      <MultipleDisplay products={cases} />
    </>
  )
}

/*
      {
        cases ? (
          <ul>
            {
              cases.map((item) => {
                return(
                <li>
                  <img src={item.img} alt={item.title} />
                  <h1>{item.title}</h1>
                  <p>${item.price}</p>
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
*/