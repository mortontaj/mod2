import React, { useState, useRef, useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Link} from 'react-router-dom';
// import Mainnav from './Mainnav';
// import { Stock1, Stock2 } from './Stock';


export default function Api() {

    

// State-like property for functional components
// Creates list to hold stock symbol
// I want the user to be able to type an input

// const [security, setSecurity] = useState({
//     StockSymbol: ""
// })

// State-like property for functional components
// Creates list to hold stock symbol
// I want the user to be able to type an input
const [currency, setCurrency] = useState([

])

let moneySwapRef = useRef();
  useEffect(() => {
    moneySwapRef.current.focus();
  }, []);

function handleSubmit(e) {
    e.preventDefault();
    let newFiat = [
      {
        moneySwap: moneySwapRef.current.value,
      },
    ];
    setCurrency((oldFiat) => oldFiat.concat(newFiat));
    addItemRef.current.value = "";
    console.log(currency);
  }


const urlLink = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=`;
const usStock = stock.toLocaleUpperCase();
  fetch(urlLink + usStock, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      "x-rapidapi-key": "7a7b957881mshd3ce7c9e713536dp16ee6cjsn45965a7a6da2", /// <----- Change to your key
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    
    
    
    })
return (
    <div>
        
    </div>
  );
}
