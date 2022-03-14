import React from 'react'
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const ProductSlideshow = ({images}) => {
  return (
    <Slide
     easing="ease"
        duration ={7000}
        indicators
    >
      {
          images.map (image =>{
              const url =`/products/${image}`;
              return (
                  <div className="slideshow" key={image}>
                      <div style={{
                          backgronudImage:`url(${ url })`,
                          backgroundSize:'cover'
                      }}>
                          </div>
                      <style jsx>
             {`
             .slideshow > div{
                 display:flex;
                 justify-content: center;
                 background-size: contain;
                 background-position:center;
                 height:650px;
             }
             
             `}
         </style>
                      </div>
              )
          })
      } 
    </Slide>
  )
}

export default ProductSlideshow