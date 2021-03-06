import React from 'react'
import {
  AppBar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Toolbar,
} from '@material-ui/core'

import { ShoppingCart } from '@material-ui/icons'
import logo from '../../assets/commerceCart.png'
import useStyles from './styles'

const Navbar = ({ totalItems }) => {
  const classes = useStyles()
  return (
    <>
      <AppBar position='fixed' className={classes.appBar} color='inherit'>
        <Toolbar>
          <Typography variant='h6' className={classes.title} color='inherit'>
            <img
              src={logo}
              alt='Chey Commerce'
              height='25px'
              className={classes.image}
            />
            Chey Commerce
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label='Show Cart Items' color='inherit'>
              <Badge badgeContent={totalItems} color='secondary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
