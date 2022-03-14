import React from 'react'
import ShopLayout from '../../components/layouts/ShopLayout'
import { Typography, Link } from '@mui/material'
import { Box } from '@mui/system'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import NextLink from 'next/link'

const empty = () => {
  return (
    <ShopLayout title="Carrito vació" pageDescription='No hay artículos en el carrito de compras'>
        <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={{flexdirection:{xs:'column',sm: 'row'}}}
        >
            <RemoveShoppingCartOutlined sx = {{fontSize:100}}/>
            <Box display='flex' flexDirection='column' alignItems='center'>

           
            <Typography /* variant='h2' component='h2' fontSize={80} fontWeight={200} */>Su carrito está vació</Typography>
           <NextLink href="/" passHref>
               <Link typography ='h3' color='secondary' >
               Regresar</Link>
               </NextLink>
             </Box>
        </Box>
        </ShopLayout>
  )
}

export default empty