import { useState, useEffect } from 'react'
import MultipleDisplay from '../../components/MultipleDisplay'
// import {headers} from '../../../config/apiHeaders'

export default function Storage (props) {
  const [storage, setStorage] = useState([])

  const getStorage = async () => {
    try {
      const response = await fetch(`${props.url}/storage?limit=10&offset=0`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            "X-RapidAPI-Key": `${props.apiKey}`,
            "X-RapidAPI-Host" : `${props.host}`
        }
      })
      const data = await response.json()
      setStorage(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getStorage()
  }, [])

  return(
    <>
      <h1>Storage</h1>
      <MultipleDisplay products={storage} />
    </>
  )
}

/*
      {
        storage ? (
          <ul>
            {
              storage.map((item) => {
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