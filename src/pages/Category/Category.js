import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { headers } from '../../utilites/send-product-request'
// import PrevNextBtn from '../components/PrevNextBtn'


export default function Category (props) {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [limit, setLimit] = useState(10)
  const [offset, setOffset] = useState(0)
  const url = `${headers.base_url}`
  const host = `${headers.host}`
  const apiKey = `${headers.apiKey}`

  const getProducts = async () => {
    try {
      const response = await fetch(`${url}/mouse?limit=10&offset=0`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "X-RapidAPI-Key": `${apiKey}`,
          "X-RapidAPI-Host": `${host}`
        }
      })
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])


//   return(
//     <>
//       <h1>Mouses</h1>
//       {
//         mouses ? (
//           <ul>
//             {
//               mouses.map((mouse) => {
//                 return(
//                 <li key={mouse.id}>
//                   <img src={mouse.img} alt={mouse.title} />
//                   <h3>{mouse.brand} - {mouse.model} {mouse.wireless}</h3>
//                   <p>${mouse.price}</p>
//                   <button>Add to Cart</button>
//                 </li>)
//               })
//             }
//           </ul>
//         ) : <h1>Nothing to Show</h1>
//       }
//       {<PrevNextBtn limit={limit} offset={offset}/>}
//     </>
//   )
}