import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    100: '#262626',
    200: '#373737',
    300: '#8F8EA0',
    400: '#F1F1F1'
  },
}

const theme = extendTheme({ colors })

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)