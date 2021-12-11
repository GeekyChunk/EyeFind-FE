import '../styles/globals.css'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import store from '../store/store'
import { Provider } from 'react-redux'
import theme from "../theme/theme"
import Layout from '../layouts/layout'

function Init() {

  return (<> </>)
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
          <Init />
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
