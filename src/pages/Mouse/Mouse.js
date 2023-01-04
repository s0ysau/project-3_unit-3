import { useState, useEffect } from 'react'
import PrevNextBtn from '../components/PrevNextBtn'
import { getProducts } from '../utilites/send-product-request'

export default function Mouse (props) {
  const [loading, setLoading] = useState(false)
  const [mouses, setMouses] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)

  const getMouses = async () => {
    try {
      const response = await fetch(`${props.url}/mouse?limit=10&offset=0`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "X-RapidAPI-Key": `${props.apiKey}`,
          "X-RapidAPI-Host": `${props.host}`
        }
      })
      const data = await response.json()
      setMouses(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMouses()
  }, [])


  return(
    <>
      <h1>Mouses</h1>
      {
        mouses ? (
          <ul>
            {
              mouses.map((mouse) => {
                return(
                <li key={mouse.id}>
                  <img src={mouse.img} alt={mouse.title} />
                  <h3>{mouse.brand} - {mouse.model} {mouse.wireless}</h3>
                  <p>${mouse.price}</p>
                  <button>Add to Cart</button>
                </li>)
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
      {/* <PrevNextBtn limit={limit} offset={offset}/> */}
    </>
  )
}
