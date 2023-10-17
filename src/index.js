import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  )

/*
import { createRoot } from 'react-dom/client'
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);*/


/*createRoot(document.getElementById('root')).render(<App />)*/