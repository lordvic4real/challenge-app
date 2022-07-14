import './App.css';
import React from 'react';
import TransactionDetail from './pages/TransactionDetail';
import { ApolloClient, InMemoryCache, ApolloProvider}  from '@apollo/client';


const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});



function App() {
 
  return (
    <ApolloProvider client={client}>
       <TransactionDetail  />
    </ApolloProvider>
  );
}

export default App;
