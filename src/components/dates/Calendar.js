import React, { useState } from 'react';
import SingleDate from './SingleDate';
import '../../css/dates.css'

const Calendar = (props) => {
  const datesArr = ['20-12','21-12','22-12'];
  return (
    <div className="calendar">
      {datesArr.map((oneDate,i) => <SingleDate key={i} date={oneDate}/>)}
    </div>
  );
}

export default Calendar;