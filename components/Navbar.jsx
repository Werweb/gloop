import { AppBar, Toolbar, Typography,Link,  Button, IconButton, Badge } from '@mui/material'
import React from 'react'
import NextLink from 'next/link'
import { Box, } from '@mui/system'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'

const Navbar = () => {
  return (
   <>
   <AppBar>
       <Toolbar>
            <NextLink href='/' passHref>
                <Link display='flex' alignItems='center'>
                <Typography variant='h6'>Teslo |</Typography>
                <Typography sx={{ml:0.5}}>Shop</Typography>
                </Link>
            </NextLink>
            {/* flex */} <Box flex={1}/>
            {/* <Box sx={{display:'none'}}> */} {/* esconde  */}
                {/* <Box sx={{display:'block'}}> */} {/* muestra */}
                <Box sx={{display:{xs:'none',sm:'block'}}}>
                <NextLink href='/category/men' passHref>
                    <Link>
                    <Button>Hombres</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/woman' passHref>
                    <Link>
                    <Button>Mujeres</Button>
                    </Link>
                </NextLink>
                <NextLink href='/category/kid' passHref>
                    <Link>
                    <Button>Niños</Button>
                    </Link>
                </NextLink>
                </Box>
           
             {/* flex */} <Box flex={1}/>
             <IconButton>
                 <SearchOutlined/>
             </IconButton>
             <NextLink href='/cart' passHref>
                    <Link>
                    <IconButton>
                        <Badge badgeContent={2} color="secondary"> {/* esto es para que aparezca el numerito arriba */}
                            <ShoppingCartOutlined/>
                        </Badge>
                        
                    </IconButton>
                    </Link>
                </NextLink>
                <Button>Menú</Button>
       </Toolbar>
   </AppBar>
   </>
  )
}

export default Navbar