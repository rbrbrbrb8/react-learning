import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleDate = (props) => {
  const {date} = props; //make date in map function in parent component
  return (
    <div className="single-date-container">
      <Link to="DateInfo" className="single-date">
        {date}
      </Link>
    </div>
  );
}

export default SingleDate;