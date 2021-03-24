import React, { useState, useEffect } from 'react'
import { Products, NavBar } from './components'
import { commerce } from './library/commerce'

const App = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(products)
  return (
    <div className='App'>
      <NavBar />
      <Products products={products} />
    </div>
  )
}

export default App
