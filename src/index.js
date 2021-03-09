import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/reduxStore";
import storeContext from './storeContext';


const renderEntireThree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <storeContext.Provider value={store} >
       <App  />
      </storeContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}
store.subscribe(renderEntireThree);
renderEntireThree();



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
npm install react-router-dom --save
npm install redux --save
*/