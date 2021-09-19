import React, { useState, useRef, useEffect } from 'react'

const Api1 = () => {

// State-like property for functional components
// Creates list to hold stock symbol
// I want the user to be able to type an input

//empty because user input will fill this Key!
const [info, setInfo] = useState ({
summary : ""
})

//Empty but will hold fetched data so we can display in the return!
const [security1, setSecurity1] = useState(
{
    name: { short: "" , long: "" },
    exchange: "",
    netIncome: { "1": "", "2": "", "3": "", "4": "" },
    Forward_PE_Ratio: "",
    dividend: "",
    bid: "",
    bidSize: "",
    ask: "",
    askSize: "",
    dayHigh: "",
    dayLow: "",
    avgDailyVolume: "",}) 

const [security2, setSecurity2] = useState( 
    {
        sector: "",
        industry: "",
        location: { city: "", state: "", zip: ""},
        summary: "",
        officer: { title: "", name: "", totalPay: ""},
        marketCap: "",
        website: "",
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
    
    //does not work because inside the scope of handleSubmitStock function
    //setSymbol(newStock.ticker); //.toLocaleUpperCase())    
    //console.log(symbol);
    
    const fetchStock = () => {
        
        console.log(newStock.ticker);
        const urlLink = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-financials?symbol=`;
        fetch(urlLink + newStock.ticker, {
            method: "GET",
            headers: {
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
            "x-rapidapi-key": process.env.REACT_APP_API_KEY /// <----- Change to your key
            },
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
    
            //I want to fill the security properties with data from API
            //So I can display it in the return
    
            setSecurity1({
                name: { short: data.quoteType.shortName , long: data.price.longName },
                exchange: data.quoteType.exchange,
                netIncome: { "Year ago": data.incomeStatementHistoryQuarterly.incomeStatementHistory[0].netIncome.longFmt,
                     "2": data.incomeStatementHistoryQuarterly.incomeStatementHistory[1].netIncome.longFmt,
                     "3": data.incomeStatementHistoryQuarterly.incomeStatementHistory[2].netIncome.longFmt,
                     "Most Recently": data.incomeStatementHistoryQuarterly.incomeStatementHistory[3].netIncome.longFmt
                },
                Forward_PE_Ratio: data.summaryDetail.forwardPE,
                dividend: data.summaryDetail.dividendRate,
                bid: data.summaryDetail.bid.fmt,
                bidSize: data.summaryDetail.bidSize.longFmt,
                ask: data.summaryDetail.ask.fmt,
                askSize: data.summaryDetail.askSize.longFmt,
                dayHigh: data.summaryDetail.dayHigh.raw,
                dayLow: data.summaryDetail.dayLow.raw,
                avgDailyVolume: data.summaryDetail.averageDailyVolume10Day.longFmt,
            })
        });
        const urlLink2 = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=`;
        fetch(urlLink2 + newStock.ticker, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY /// <----- Change to your key
            },
        })
        .then((response) => response.json())
        .then((data2) => {
            console.log(data2);
            console.log("Api1 works!");
            setSecurity2({
                sector: data2.assetProfile.sector,
                industry: data2.assetProfile.industry,
                location: { 
                    city: data2.assetProfile.city, 
                    state: data2.assetProfile.state,
                    zip: data2.assetProfile.zip
                },
                officer: { title: data2.assetProfile.companyOfficers[0].title,
                    name: data2.assetProfile.companyOfficers[0].name,
                    totalPay: data2.assetProfile.companyOfficers[0].totalPay.fmt
                },
                marketCap: data2.price.marketCap.longFmt,
                website: data2.assetProfile.website
            })
            setInfo({
                summary: data2.assetProfile.longBusinessSummary
            });
        })
    ;
    };
fetchStock()
stockSearchRef = [""];
};
console.log(security1, security2, info)

return (
    <div>
       <h2>Stock Search</h2>
       <form onSubmit={handleSubmitStock}>
           <label htmlFor="stockSearch">Stock symbol</label>
           <input id="stockSearch" ref={stockSearchRef} type="text" required />
           <button className="button">Stock Search</button>
       </form>
       <p> thanks API1 both work!</p>
    </div>
  );
}

export default Api1