import React from 'react';
import Form from 'react-bootstrap/Form';

const MonthSelector = ({ selectedMonth, handleMonthChange }) => {
  const Months = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  return (
    <>
    <style>
        {`
        select .month:hover {
          background-color: black ;
        }
        `}
      </style>
    <Form.Select value={selectedMonth} onChange={handleMonthChange} style={{ backgroundColor: '#ffc62a', color: 'black', borderColor: 'black', margin: '5px' , width:'30%', display:'inline-block', fontWeight:'bold' }}>
      {Months.map((month) => (
        <option value={month} key={month} className='month' >
          {month}
        </option>
      ))}
    </Form.Select>
    </>
  );
};

export default MonthSelector;