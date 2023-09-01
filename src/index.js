import React from 'react';
import ReactDOM from 'react-dom/client';
import './stylesheets/index.css';
import {store} from "./reducer";
import { CookiesProvider } from "react-cookie";
import { Provider } from 'react-redux';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
<CookiesProvider>
    <App />
    </CookiesProvider>
   </Provider> 
);

