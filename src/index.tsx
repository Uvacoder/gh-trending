import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import { QueryClient, QueryClientProvider, QueryFunction } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import './index.scss';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import updateFavIcon from './updateFavIcon';

const defaultQueryFn: QueryFunction = async ({ queryKey }) => {
  const { data } = await axios.get(`/api${queryKey[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});
render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById('root'),
);

updateFavIcon();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
