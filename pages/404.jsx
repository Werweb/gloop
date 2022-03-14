import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ShopLayout from '../components/layouts/ShopLayout'

const Custom404 = () => {
  return (
    <ShopLayout title={"Página no encontrada"} pageDescription={"No hay nada que mostrar aquí"}>
        <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='calc(100vh - 200px)'
        sx={{flexdirection:{xs:'column',sm: 'row'}}}
        >
            <Typography variant='h2' component='h2' fontSize={80} fontWeight={200}>404 |</Typography>
            <Typography marginLeft={2}>No encontramos ninguna página aquí</Typography>
        </Box>
        
        </ShopLayout>
  )
}

export default Custom404