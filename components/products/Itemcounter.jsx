import { AddAlarmOutlined, RemoveCircleOutline } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Itemcounter = () => {
  return (
    <Box display='flex' alignItems='center'>
        <IconButton>
            <RemoveCircleOutline/>
        </IconButton>
        <Typography sx={{ widrh:40,textAlign:'center'}}>1</Typography>
        <IconButton>
            <AddAlarmOutlined/>
        </IconButton>
    </Box>
  )
}

export default Itemcounter