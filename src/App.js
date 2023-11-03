import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/global-state';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <TransactionsList/>
      <AddTransaction/>
    </GlobalProvider>
  );
}

export default App;
