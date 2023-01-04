import { useState, useEffect } from 'react'

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
      {
        cases ? (
          <ul>
            {
              cases.map((item) => {
                return(
                <li key={item.id}>
                  <img src={item.img} alt={item.title} />
                  <h3>{item.brand} - {item.model}, {item.cabinetType}</h3>
                  <p>${item.price}</p>
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
