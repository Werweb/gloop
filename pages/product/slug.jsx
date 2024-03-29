import { Grid, Typography, Button,Chip } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import ShopLayout from '../../components/layouts/ShopLayout'
import {initialData} from '../../dataBase/Products'
import ProductSlideshow from '../../components/products/ProductSlideshow'
import ItemCounter from '../../components/products/Itemcounter';
import SizeSelector from '../../components/products/SizeSelector'

const product = initialData.products[0];


const ProductPage = () => {
  return (
    <ShopLayout title={ product.title } pageDescription={ product.description }>
    
      <Grid container spacing={3}>

        <Grid item xs={12} sm={ 7 }>
          <ProductSlideshow 
            images={ product.images }
          />
        </Grid>

        <Grid item xs={ 12 } sm={ 5 }>
          <Box display='flex' flexDirection='column'>

            {/* titulos */}
            <Typography variant='h1' component='h1'>{ product.title }</Typography>
            <Typography variant='subtitle1' component='h2'>{ `$${product.price}` }</Typography>

            {/* Cantidad */}
            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Cantidad</Typography>
              <ItemCounter />
              <SizeSelector 
                // selectedSize={ product.sizes[2] } 
                sizes={ product.sizes }
              />
            </Box>


            {/* Agregar al carrito */}
            <Button color="secondary" className='circular-btn'>
              Agregar al carrito
            </Button>

            {/* <Chip label="No hay disponibles" color="error" variant='outlined' /> */}

            {/* Descripción */}
            <Box sx={{ mt:3 }}>
              <Typography variant='subtitle2'>Descripción</Typography>
              <Typography variant='body2'>{ product.description }</Typography>
            </Box>

          </Box>
        </Grid>


      </Grid>

    </ShopLayout>
  )
}

export default ProductPage