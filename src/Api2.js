import React, { useState, useRef, useEffect } from "react";
// import { BrowserRouter as Router, Switch, Link} from 'react-router-dom';
// import { Stock1, Stock2 } from './Stock';

export default function Api2() {
  // State-like property for functional components
  // Creates list to hold stock symbol
  // I want the user to be able to type an input

  // const [security, setSecurity] = useState({
  //     StockSymbol: ""
  // })

  const [currency1, setCurrency1] = useState("USD");
  const [ammount, setAmmount] = useState("");
  const [currency2, setCurrency2] = useState("GBP");
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

  function handleSubmitExchange(e) {
    e.preventDefault();

    const currency1 = currency1Ref.current.value.toUpperCase();
    const ammount1 = ammountRef.current.value;
    const currency2 = currency2Ref.current.value.toUpperCase();

    // Once used a newFiat object with c1, c2, ammount properties
    //setCurrency1(newFiat.currency1);
    setCurrency1(currency1);
    setCurrency2(currency2);
    setAmmount(ammount1);
    // console.log(newFiat)
    // const c2 = newFiat.currency2

    fetch(
      `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${currency1}&to=${currency2}&amount=${ammount}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let currentRate = Number(data.rates[currency2].rate);
        setRate(currentRate);
        console.log(ammount1);
        setAmmount(currentRate * Number(ammount1));
      });

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

  return (
    <div>
      <h2>Currency Exchange</h2>
      <form className="exchange" onSubmit={handleSubmitExchange}>
        <label htmlFor="Currency A">Your currency:</label>
        <input
          className="inputSearch"
          id="currency1"
          ref={currency1Ref}
          type="text"
          placeholder="Enter currency symbol (i.e usd)"
          required
        />

        <label htmlFor="Amount of Currency A">Amount of Currency A:</label>
        <input
          className="inputSearch"
          id="amount"
          ref={ammountRef}
          type="number"
          required
        />

        <label htmlFor="Currency B">Desired currency:</label>
        <input
          className="inputSearch"
          id="currency2"
          ref={currency2Ref}
          type="text"
          placeholder="Enter currency symbol (i.e AUD)"
          required
        />
        <br />
        <button className="searchButton">Exchange Rate</button>
      </form>
      <ol>
        <ul>
          Exchange rate of {currency1} to {currency2}
        </ul>
        <ul>{rate}</ul>
        <br />
        <ul>Exchange amount in {currency2} </ul>
        <ul>
          <p>{ammount}</p>
        </ul>
      </ol>
    </div>
  );
}
