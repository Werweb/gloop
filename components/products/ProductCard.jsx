import React,{useState,useMemo} from 'react'
import NextLink from 'next/link'
import { Box,Link, Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";

const ProductCard = ({product}) => {
    const[isHovered,setIsHovered]= useState(false)
    const productImage = useMemo (()=>{
        return isHovered
        ?`products/${product.images[1]}`
        :`products/${product.images[0]}`
    },[isHovered, product.images])
  return (
      <Grid item xs={6} sm={4}
       onMouseEnter={()=>setIsHovered(true)}
       onMouseLeave={()=>setIsHovered(false)}
       
       /*  key={product.slug} */>
               <Card>
                   <NextLink href="/product/slug" passeHref prefetch={false}>
                       <Link>
                 <CardActionArea>
                   <CardMedia
                   component='img'
                   calssName="fedeIn"
                   image={productImage}
                   alt={product.title}
                   />
                   

                   {/* Alternativa */}
                   
                   {/* {
                       isHovered
                       ?(
                            <CardMedia
                   component='img'
                   calssName="fedeIn"
                   image={`products/${product.images[1]}`}
                   alt={product.title}
                   />
                       ):(
                         <CardMedia
                   component='img'
                   calssName="fedeIn"
                   image={`products/${product.images[0]}`}
                   alt={product.title}
                   />
                       )
                   } */}
                   
                   
                 </CardActionArea>
                 </Link>
                 </NextLink>
               </Card>
               <Box sx={{mt:1}}className="fedeIn">
                   <Typography>{product.title}</Typography>
                    <Typography>{`€${product.price}`}</Typography>

               </Box>

             </Grid>
  )
}

export default ProductCard