import { Grid, Typography } from '@mui/material'
import React from 'react'

const OrderSummarry = () => {
  return (
    <Grid container>
        <Grid item xs={6}>
            <Typography>No. Productos</Typography>
            </Grid>
            <Grid item xs={6} display='flex' judtifyContent='end'>
            <Typography>3 Productos</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography>SubTotal</Typography>
            </Grid>
            <Grid item xs={6}display='flex' judtifyContent='end'>
            <Typography>{`€${105.95}`}</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography>Impuestos (21%)</Typography>
            </Grid>
            <Grid item xs={6}display='flex' judtifyContent='end'>
            <Typography>{`€${35.95}`}</Typography>
            </Grid>
            <Grid item xs={6} sx={{mt:2}}>
            <Typography variant='subtitle1'>Total </Typography>
            </Grid>
            <Grid item sx={{mt:2}} xs={6}display='flex' judtifyContent='end'>
            <Typography variant='subtitle1'>{`€${195.15}`}</Typography>
            </Grid>
                
        </Grid>
  )
}

export default OrderSummarry