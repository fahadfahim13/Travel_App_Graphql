import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { GET_HOLIDAYS_API } from './constants/API_Endpoints';
import 'bulma/css/bulma.css'
import 'antd/dist/antd.css';


const client = new ApolloClient({
  uri: GET_HOLIDAYS_API,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
