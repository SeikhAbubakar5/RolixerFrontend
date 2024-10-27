import React, { useState } from 'react';
import TransactionTable from './Components/Table/Table';
import Statistics from './Components/Statistics/Statistics';
import BarChart from './Components/Barcharts/Barcharts';
import Dropdown from './Components/Dropdown/Dropdown';
import "./App.css"
const App = () => {
  const [selectedMonth, setSelectedMonth] = useState("All");

  return (
    <div className="app">
      <h1>Transaction Dashboard</h1>
      <Dropdown selectedMonth={selectedMonth} onChange={setSelectedMonth} />
      <TransactionTable selectedMonth={selectedMonth} />
      <div className='merge'>
        <Statistics selectedMonth={selectedMonth} />
        <BarChart selectedMonth={selectedMonth} />
      </div>
    </div>
  );
};

export default App;
