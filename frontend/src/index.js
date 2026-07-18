import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EventDetailsContextProvider } from './context/eventContext';
import { EventFormContextProvider } from './context/eventFormContext';
import { AuthContextProvider } from './context/AuthContext';


if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <EventDetailsContextProvider>
      <EventFormContextProvider>
    <App />
      </EventFormContextProvider>
    </EventDetailsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

