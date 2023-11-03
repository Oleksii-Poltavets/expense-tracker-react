import React, { useContext } from "react";
import { GlobalContext } from "../context/global-state";
import Transaction from "./Transaction";

const TransactionsList = () => {

  const { transactions } = useContext(GlobalContext);

  return <>
    <h3>History</h3>
    <ul id="list" className="list">
      {transactions.length < 1 ? 'There\'s no transactions yet...' : transactions.map(transaction => <Transaction key={transaction.id} transaction={transaction}/>)}
    </ul>
  </>
}

export default TransactionsList;