import { useState, useEffect } from 'react'
import PrevNextBtn from '../../components/PrevNextBtn'


export default function Mouse (props) {
  const [mouses, setMouses] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const getMouses = async () => {
    try {
      const response = await fetch(`${props.url}/mouse?limit=${limit}&offset=${offset}`, {
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
    setLoading(true)
    getMouses({limit, offset})
  }, [limit, offset])

  const handleNext = async () => {
    setOffset((prev) => (prev += limit));
    };
  const handlePrevious = async () => {
    if (offset === 0){
      return
    } else {
    setOffset((prev) => (prev -= limit));
    }

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
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </>
  )
}
}
