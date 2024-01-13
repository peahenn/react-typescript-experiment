import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import "bootstrap/dist/css/bootstrap.min.css";

import reportWebVitals from './reportWebVitals';

// Get the root element by ID
const rootElement = document.getElementById('root');

// Check if the root element exists before creating the root
if (rootElement) {
  // Create a root using React 18 createRoot API
  const root = ReactDOM.createRoot(rootElement);

  // Render your app inside the root
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals(console.log);
} else {
  console.error("Root element with ID 'root' not found.");
}
