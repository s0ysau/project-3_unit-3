import { useState, useEffect } from 'react'

export default function Wishlist () {
  const [products, setProducts] = useState([])
  const [foundProduct, setFoundProduct] = useState(null)
  const [newProduct, setNewProduct] = useState({
    brand: '',
    model: '',
    price: ''
  })

  return (
    <h1>Wishlist</h1>
  )
}
