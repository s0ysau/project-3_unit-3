import { useState, useEffect } from 'react'
import {sendProductRequire} from '../../utilites/send-product-request'
import ProductDisplay from '../ProductsDisplay/ProductsDisplay'

export default function PowerSupply (props) {
  const [pwrSupplies, setPwrSupplies] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    sendProductRequire({category: 'power_supply', limit, offset})
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
  };

  return(
    <div className='product-body'>
      <h1>Power Supply</h1>
      {
        pwrSupplies ? (
          <ul className='product-listing-container'>
            {
              pwrSupplies.map((pwrSupply) => {
                return(
                  <ProductDisplay props={pwrSupply} />
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
