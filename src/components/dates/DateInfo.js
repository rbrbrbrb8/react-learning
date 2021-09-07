import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

const DateInfo = (props) => {
  const location = useLocation();
  const {totalEvents} = location.state;
  const [currentEvent,setCurrentEvent] = useState(location.state.currentEvent);
  useEffect(() => {
    // axios.get('/api/dateInfo').then(res => {
    // })
  }, []);
  return (
    <div>
      <p>this is date info</p>
    </div>
  );
}

export default DateInfo;