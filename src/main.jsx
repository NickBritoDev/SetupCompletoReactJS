// main.jsx
import * as React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <Router>
          <App />
        </Router>
    </ChakraProvider>
  </React.StrictMode>
)
