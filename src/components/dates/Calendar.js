import React, { useState } from 'react';
import SingleDate from './SingleDate';
import { Grid } from '@material-ui/core';
import '../../css/dates.css'
import CalendarHead from './CalendarHead';
import MonthPicker from './MonthPicker';


const Calendar = (props) => {
  const datesArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <Grid container spacing={1} direction='column' wrap>
      <MonthPicker />
      <CalendarHead />
      <Grid item container>
        {datesArr.map((oneDate, i) => (
          <Grid item xs key={i}>
            <SingleDate date={oneDate} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Calendar;