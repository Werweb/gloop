import { Button, CardContent, Typography,Grid, Divider } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CartList from '../../components/cart/CartList'
import OrderSummarry from '../../components/cart/OrderSummarry'
import ShopLayout from '../../components/layouts/ShopLayout'

const CartPage = () => {
  return (
    <ShopLayout title='Carrito -3'pageDescription={'Carrito de compra de la tienda'}>
        <Typography variant='h1' component='h1'>Carrito</Typography>
        <Grid container>
            <Grid item xs={12} sm={7}>
                {/* CartList */}
                <CartList editable/>
            </Grid>
            <Grid item xs={12} sm={5}>
                <CardContent>
                    <Typography variant='h2'>Orden</Typography>
                    <Divider sx={{my:1}}/>
                    {/* order Summary */}
                    <OrderSummarry/>
                    <Box sx={{mt:3}}>
                        <Button color="secondary" className="circular-btn" fullWidth>
                            Checkout

                        </Button>
                    </Box>
                </CardContent>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default CartPage