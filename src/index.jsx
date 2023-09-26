// import the important in react components
// Note: this is important
import React from 'react';
import ReactDOM from 'react-dom/client';

// import routing 
// Note: this is important
import {BrowserRouter} from "react-router-dom"


// import the css styling
import './index.css';

// import the file
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


