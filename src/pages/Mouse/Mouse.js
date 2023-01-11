import { useState, useEffect } from 'react'
import ProductDisplay from '../ProductsDisplay/ProductsDisplay'


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
  }

  return(
    <div className='product-body'>
      <h1>Mouses</h1>
      {
        mouses ? (
          <ul  className='product-listing-container'>
            {
              mouses.map((mouse) => {
                return(
                  <ProductDisplay props={mouse} />
                )
              })
            }
          </ul>
        ) : <h1>Nothing to Show</h1>
      }
      <div className='button-btns'>
        <button onClick={handlePrevious} className="prev">Previous</button>
        <button onClick={handleNext} className="next">Next</button>
      </div>
    </div>
  )
}

