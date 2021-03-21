import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Product'

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes',
    price: '$5',
    image:
      'https://images-na.ssl-images-amazon.com/images/I/711RJEthqtL._AC_UL1500_.jpg',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple macbook',
    price: '$1800',
    image:
      'https://cnet3.cbsistatic.com/img/yjrw7VgWV7a95AvK8Ym0Np4bFXY=/1200x675/2017/06/27/13484418-bfd9-41e2-8f2d-9b4afb072da8/apple-macbook-pro-15-inch-2017-14.jpg',
  },
]

const Products = () => {
  return (
    <main>
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
