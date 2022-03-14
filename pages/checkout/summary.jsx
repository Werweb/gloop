import { Button, CardContent, Typography,Grid, Divider, Link } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CartList from '../../components/cart/CartList'
import OrderSummarry from '../../components/cart/OrderSummarry'
import ShopLayout from '../../components/layouts/ShopLayout'
import NextLink from 'next/link'

const SummaryPage = () => {
  return (
    <ShopLayout title='Resumen de orden'pageDescription={'Resumen de la orden '}>
        <Typography variant='h1' component='h1'>Resumen de la Orden</Typography>
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
                        <Button color="secondary" className="circular-btn" fullWidth>
                           Cobfirmar Orden

                        </Button>
                    </Box>
                </CardContent>
            </Grid>
        </Grid>
    </ShopLayout>
  )
}

export default SummaryPage