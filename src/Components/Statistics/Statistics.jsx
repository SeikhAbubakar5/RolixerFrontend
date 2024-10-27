import React, { useEffect, useState } from 'react';
import { getStatistics } from '../Services/api';
import "./Statistics.css"

const Statistics = ({ selectedMonth }) => {
  const [statistics, setStatistics] = useState({ totalSaleAmount: 0, soldItems: 0, notSoldItems: 0 });

  useEffect(() => {
    const fetchStatistics = async () => {
      const { data } = await getStatistics(selectedMonth);
      setStatistics(data);
    };
    fetchStatistics();
  }, [selectedMonth]);

  return (
    <div className="statistic">
      <div className='title'>
        <h3>Statistics- {selectedMonth}</h3>
      </div>
      <div className='price'>
        <p>Total Sale: <span style={{ marginLeft: '20px' }}>${statistics.totalSaleAmount}</span></p>
        <p>Total Sold Items: <span style={{ marginLeft: '20px' }}>{statistics.soldItems}</span></p>
        <p>Total Not Sold Items: <span style={{ marginLeft: '20px' }}>{statistics.notSoldItems}</span></p>
      </div>
    </div>
  );
};

export default Statistics;
