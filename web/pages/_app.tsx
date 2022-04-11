import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '../themes/principal'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'


function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default MyApp

