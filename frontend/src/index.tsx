import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Routers } from './routes/Routers';
import { Provider } from 'react-redux';
import store from './store/store'; // Added this line

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routers />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();