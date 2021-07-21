import * as React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import App from './App';

const theme = extendTheme({
  // customize tokens
  colors: {
    error: '#EC7063',
    lightestGray: '#F8F9F9',
  },
  // customize component styling
  components: {
    Button: {
      // override base styles
      baseStyle: { lineHeight: '1.6' },
      sizes: {
        // override existing size
        lg: { color: 'blue' },
        // craete new size
        xl: { h: '60px', minW: '200px', fontsize: 'lg' },
      },
      variants: {
        // add new visual variant
        error: { bg: 'error', color: 'white' },
      },
    },
  },
  // override global styles
  styles: {
    global: {
      body: { bg: 'lightestGray' },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
