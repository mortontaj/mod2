import React, { useState, useRef, useEffect } from 'react';
// import { BrowserRouter as Router, Switch, Link} from 'react-router-dom';
// import Mainnav from './Mainnav';
// import { Stock1, Stock2 } from './Stock';


export default function Api2() {

// State-like property for functional components
// Creates list to hold stock symbol
// I want the user to be able to type an input

// const [security, setSecurity] = useState({
//     StockSymbol: ""
// })

// State-like property for functional components
// Creates list to hold stock symbol
// I want the user to be able to type an input
const [currency1, setCurrency1] = useState("");
const [ammount, setAmmount] = useState("");
const [currency2, setCurrency2] = useState("");
const [rate, setRate] = useState("");

 let currency1Ref = useRef();
//   useEffect(() => {
//     currency1Ref.current.focus();
//   }, []);

let currency2Ref = useRef();
//   useEffect(() => {
//     currency2Ref.current.focus();
//   }, []);

let ammountRef = useRef();
  useEffect(() => {
    ammountRef.current.focus();
  }, []);


// const Exchange = (your_money, new_money) => 


/*  fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=GBP&amount=1000`, {
	method: "GET",
	headers: {
		"x-rapidapi-host": "currency-converter5.p.rapidapi.com",
		"x-rapidapi-key": "7a7b957881mshd3ce7c9e713536dp16ee6cjsn45965a7a6da2"
	}
})
.then(response => response.json()
)
.then((data) => console.log(data))
//setRate(data))
*/

// console.log(rate) // displays your data


  /*fetch(
    `https://currency-exchange.p.rapidapi.com/exchange?to=${newFiat.currency1}&from=${newFiat.currency2}&q=1.0`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
        "x-rapidapi-key": "7a7b957881mshd3ce7c9e713536dp16ee6cjsn45965a7a6da2",
      },
    }
  )
    .then((res) => res.json()) // converts computer language to human readable language
    .then((data) => setRate(data))
      console.log(rate); // displays your data

      if (rate != 0) {
        setAmmount((rate * newFiat.ammount))};

        const newFiat = 
  {
    currency1: currency1Ref.current.value.toUpperCase(),
    ammount: ammountRef.current.value,
    currency2: currency2Ref.current.value.toUpperCase(),
  };
})*/

function handleSubmit(e) {
    e.preventDefault();

    const newFiat = {
     currency1: currency1Ref.current.value.toUpperCase(),
     ammount: ammountRef.current.value,
     currency2: currency2Ref.current.value.toUpperCase()
    }
    setCurrency1(newFiat.currency1);
    setCurrency2(newFiat.currency2);
    setAmmount(newFiat.ammount);
    console.log(newFiat)

fetch(`https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${newFiat.currency1}&to=${newFiat.currency2}&amount=${newFiat.ammount}`, {
	method: "GET",
	headers: {
		"x-rapidapi-host": "currency-converter5.p.rapidapi.com",
		"x-rapidapi-key": "7a7b957881mshd3ce7c9e713536dp16ee6cjsn45965a7a6da2"
	}
})
.then(response => response.json()
)
.then((data) => console.log(data, data.rates))
            
        // setAmmount((newRate * ammount))
        
        
        //   .catch((err) => {
        //     console.error(err);
        //   });
    

    // currency1Ref.current.value = [""];

    // ammountRef.current.value = [""];
    
    
  
    // currency2Ref.current.value = [""];
    // Exchange(currency1, currency2, ammount);

    // console.log(newFiat.currency1, newFiat.currency2, newFiat.ammount);
    // console.log(...currency1, currency2, ammount);
    
}

/* 
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
*/
return (
   <div>
      <h1>Currency Exchange</h1>
       <form onSubmit={handleSubmit}>
        <label htmlFor="Currency A">Your currency:</label>
        <input id="currency1" ref={currency1Ref} type="text" required />
        
        <label htmlFor="Amount of Currency A">Amount of Currency A:</label>
        <input id="amount" ref={ammountRef} type="number" required/>

        <label htmlFor="Currency B">Desired currency:</label>
        <input id="currency2" ref={currency2Ref} type="text" required />
        
        <button className="button">Exchange Rate</button>
      </form>
       <ol>
        <ul>Exchange rate of {currency1} to {currency2}</ul> 
        <ul>{rate}</ul>
        <br/>
        <ul>Exchange amount in {currency2} </ul> 
        <ul>{ammount}</ul> 

       </ol> 

   </div>
  );
}
