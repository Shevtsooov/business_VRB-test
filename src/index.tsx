import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './styles/normilize.scss'
import { store } from './Redux/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  );
}
