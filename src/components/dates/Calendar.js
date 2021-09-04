import React, { useState } from 'react';
import SingleDate from './singleDate/SingleDate';
import { Grid } from '@material-ui/core';
import '../../css/dates.css'
import CalendarHead from './CalendarHead';
import MonthPicker from './MonthPicker';
import CalendarRow from './CalendarRow';

const sliceIntoSevens = arr => {
  const res = []
  for (let i = 0; i < arr.length; i += 7) {
    const chunk = arr.slice(i, i + 7);
    res.push(chunk);
  }
  return res;
}

const Calendar = (props) => {
  const oneDatesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const twoDatesArr = [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const datesArr = oneDatesArr.concat(twoDatesArr);
  const [startIndex,setStartIndex] = useState(0);
  const [endIndex,setEndIndex] = useState(35);
  const fixedDates = sliceIntoSevens(datesArr.slice(startIndex,endIndex));
  return (
    <Grid container spacing={1} direction='column'>
      <MonthPicker />
      <CalendarHead />
      <Grid item container wrap="wrap">
        {fixedDates.map((sevenChunk, i) => (
          <CalendarRow sevenChunk={sevenChunk} key={i}></CalendarRow>
        ))}
      </Grid>
    </Grid>
  );
}

export default Calendar;