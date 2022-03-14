import { Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material";
import ShopLayout from "../components/layouts/ShopLayout";
import {initialData} from '../dataBase/Products'
import ProductList from '../components/products/ProductList'


export default function Home() {
  return (
    
    <>
    <ShopLayout
    title={'Teslo_Shop - Home'}
    pageDescription={'Encuentra los mejores productos de Teslo aquí'}
    >
      <Typography variant='h1' component='h1'>Tienda</Typography>
       <Typography variant='h2' sx={{mb:1}}>Todos los Productos</Typography>
       {/* <Grid container spacing={4}>
         {
           initialData.products.map( product =>(
             <Grid item xs={6} sm={4} key={product.slug}>
               <Card>
                 <CardActionArea>
                   <CardMedia
                   component='img'
                   image={`products/${product.images[0]}`}
                   alt={product.title}
                   />
                 </CardActionArea>
               </Card>

             </Grid>
           ))
         }
       </Grid> */}
       <ProductList products={initialData.products}/>

    </ShopLayout>
    </>
  )
}
