import { Grid, Typography, Link, CardMedia, CardActionArea,Button } from '@mui/material'
import React from 'react'
import {initialData} from '../../dataBase/Products'
import NextLink from 'next/link'
import { Box } from '@mui/system'
import Itemcounter from '../products/Itemcounter'

const productsInCart = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]
const CartList = ({editable}) => {
  return (
    <>
    {
        productsInCart.map(product=>(
             <Grid container  sx={{mb:1}} key={product.slug}>
                 <Grid item xs={3}>
                    <NextLink href="/product/slug" passHref>
                        <Link>
                        <CardActionArea>
                        <CardMedia
                        image={`/products/${product.images[0]}`}
                        component='img'
                        sx={{briderRadius:'5px'}}/>
                        </CardActionArea>
                        </Link>

                    </NextLink>
                 </Grid>
                 <Grid item xs={7}>
                    <Box dispaly='flex' flexDirection='column'>
                        <Typography variant='body1'>{product.title}</Typography>
                        <Typography variant='body1'>Talla: <strong>M</strong></Typography>
                   {/* condicional */}
                   {
                       editable ?   <Itemcounter/> : <Typography variant='h5'>3 items</Typography>
                   }
                 
                    </Box>
                 </Grid>
                 <Grid item xs={2}dispaly='flex'  alignItems='center' flexDirection='column'>
                    <Typography variant='subtitle1'>{`€${product.price}`}</Typography>
                {
                    editable && (
                            <Button variant='texto'color='secondary' >Remover</Button>
                    )
                }
                
                
                 </Grid>
             </Grid>
             

        ))
    }
    
    </>
  )
}

export default CartList