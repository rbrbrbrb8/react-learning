import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@material-ui/core';

const SingleDate = (props) => {
  const { date } = props; //make date in map function in parent component
  return (
    <Link to="DateInfo" className="single-date">
      <Card className="single-date-container">
        {date}
      </Card>
    </Link>
  );
}

export default SingleDate;