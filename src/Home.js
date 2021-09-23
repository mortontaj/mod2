import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const accountValue = useSelector((state) => state.ran.marketValue);
  const accountValue2 = useSelector((state2) => state2.str.marketValue2);
  const dispatch = useDispatch();
  const dispatch2 = useDispatch();
  return (
    <div>
      <h2>Passive Investing Account : ${accountValue} </h2>
      <div id="reduxButtons">
        <button
          id="deposit"
          className="buttond"
          onClick={() => dispatch({ type: "Deposit" })}
        >
          Deposit
        </button>
        <button
          id="withdraw"
          className="buttond"
          onClick={() => dispatch({ type: "Withdraw" })}
        >
          Withdraw
        </button>
        <button
          id="speculate"
          className="buttond"
          onClick={() => dispatch({ type: "Speculate" })}
        >
          Speculate
        </button>
      </div>
      <p className="sample">**Sample Equity Speculation Portfolio Simulation</p>
      <h2>Options Trading Account : ${accountValue2} </h2>
      <div id="reduxButtons">
        <button
          id="deposit2"
          className="buttond"
          onClick={() => dispatch2({ type: "Deposit2" })}
        >
          Deposit
        </button>
        <button
          id="withdraw2"
          className="buttond"
          onClick={() => dispatch2({ type: "Withdraw2" })}
        >
          Withdraw
        </button>
        <button
          id="trade"
          className="buttond"
          onClick={() => dispatch2({ type: "Trade" })}
        >
          Trade
        </button>
      </div>
      <p className="sample">**Sample Equity Options Portfolio Simulation</p>
    </div>
  );
}
