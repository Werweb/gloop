import { Button,Chip, CardContent, Typography,Grid, Divider, Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CartList from '../../components/cart/CartList'
import OrderSummarry from '../../components/cart/OrderSummarry'
import ShopLayout from '../../components/layouts/ShopLayout'
import NextLink from 'next/link'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'

const OrderPage = () => {
  return (
    <ShopLayout title='Resumen de la orden 12332923428975'pageDescription={'Resumen de la orden '}>
        <Typography variant='h1' component='h1'>Orden: ABC 3949238574985</Typography>
      
     {/*  <Chip
      sx={{my:2}}
      label="Pendiente de pago"
      variant='outlined'
      color="error"
      icon={<CreditCardOffOutlined/>}
      /> */}
      <Chip
      sx={{my:2}}
      label="La orden ya fue Pagada"
      variant='outlined'
      color="success"
      icon={<CreditScoreOutlined/>}
      />

      
        <Grid container>
            <Grid item xs={12} sm={7}>
 
                <CartList />
            </Grid>
            <Grid item xs={12} sm={5}>
                <CardContent>
                    <Typography variant='h2'>Resumen (3 productos</Typography>
                    <Divider sx={{my:1}}/>
                    <Box display='flex' justifyContent='space-between'>
                        <Typography variant='subtitle1'>Dirección de entrega</Typography>
                        <NextLink href="/checkout/address" passHref>
                            <Link underline='always'>
                            Editar
                            </Link>
                            </NextLink>
                    </Box>
                    
                    <Typography>Ferando Herrera</Typography>
                    <Typography>318 Boyaca</Typography>
                    <Typography>30008 Murcia</Typography>
                    <Typography>Canadá</Typography>
                    <Typography>+34 639667878</Typography>
                    <Divider sx={{my:1}}/>
                     <Box display='flex' justifyContent='end'>
                        <NextLink href="/cart" passHref>
                            <Link underline='always'>
                            Editar
                            </Link>
                            </NextLink>
                    </Box>
               
                    <OrderSummarry/>
                    <Box sx={{mt:3}}>
                       <h1>Pagar</h1> 
                       <Chip
      sx={{my:2}}
      label="La orden ya fue Pagada"
      variant='outlined'
      color="success"
      icon={<CreditScoreOutlined/>}
      />
                    </Box>
                </CardContent>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default OrderPage