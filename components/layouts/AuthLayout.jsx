import React from 'react'
import Head from 'next/head';
import { Box } from '@mui/material';

const AuthLayout = ({ children, title  }) => {
  return (
   <>
    <Head>
            <title>{ title }</title>
        </Head>

        <main>
            <Box display='flex' justifyContent='center' alignItems='center' height="calc(100vh - 200px)">   
                { children }
            </Box>
        </main>
   </>
  )
}

export default AuthLayout