import React, { useState, useRef, useEffect } from 'react'

const Api1 = () => {

// State-like property for functional components
// Creates list to hold stock symbol
// I want the user to be able to type an input

//empty because user input will fill this Key!
const [symbol, setSymbol] = useState ([""])

//Empty but will hold fetched data so we can display in the return!
const [security, setSecurity] = useState(
{
    name: { short: "" , long: "" },
    exchange: "",
    netIncome: { "1": "", "2": "", "3": "", "4": "" },
    payoutRatio: "",
    dividend: "",
    bid: "",
    bidSize: "",
    ask: "",
    askSize: "",
    dayHigh: "",
    dayLow: "",
    avgDailyVolume: "",
    sector: "",
    industry: "",
    location: { city: "", state: "", zip: ""},
    summary: "",
    officer: { title: "", name: "", totalPay: ""},
    marketCap: "",
    website: ""
}) 

let stockSearchRef = useRef();
  useEffect(() => {
    stockSearchRef.current.focus();
  }, []);

const handleSubmitStock = (e) => {
    e.preventDefault();
    const newStock = {
        ticker: stockSearchRef.current.value
    };
    setSymbol(newStock.ticker); //.toLocaleUpperCase())    
    console.log(symbol);
    // fetchStock()
    // stockSearchRef = [""];
const fetchStock = () => {
    console.log(symbol);
    console.log(newStock.ticker);
const urlLink = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=`;
// const usStock = symbol;
  fetch(urlLink + newStock.ticker, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      "x-rapidapi-key": "7a7b957881mshd3ce7c9e713536dp16ee6cjsn45965a7a6da2" //REACT_APP_API_KEY, /// <----- Change to your key
    },
  })
  .then((response) => response.json())
    .then((data) => {
      console.log(data);

      //I want to fill the security properties with data from API
      //So I can display it in the return
    });

}
fetchStock()
}
console.log(symbol)
return (
    <div>
       <h1>Stock Search</h1>
       <form onSubmit={handleSubmitStock}>
           <label htmlFor="stockSearch">Stock symbol</label>
           <input id="stockSearch" ref={stockSearchRef} type="text" required />
           <button className="button">Stock Search</button>
       </form>
       <p>
           {security.symbol}
       </p>
    </div>
  );
}

export default Api1