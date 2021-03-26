import React, { useState, useEffect } from 'react'
import { Products, NavBar, Cart } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { commerce } from './library/commerce'

const App = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity)

    setCart(item.cart)
  }

  useEffect(() => {
    fetchProducts()
    fetchCart()
  }, [])

  console.log('the cart', cart)

  return (
    <Router>
      <div className='App'>
        <NavBar totalItems={cart.total_items} />
        {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
        <Cart cart={cart} />
      </div>
    </Router>
  )
}

export default App
