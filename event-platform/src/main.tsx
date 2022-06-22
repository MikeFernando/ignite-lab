import { ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import React from 'react'

import { apolloClient } from './lib/apollo';
import { App } from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
