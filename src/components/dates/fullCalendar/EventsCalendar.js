import React, { useState,useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import heLocale from '@fullcalendar/core/locales/he';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { changeKenes } from '../../../redux/ducks/currentEvent';
const calendarConfig = require('./calendarConfig');


const EventsCalendar = function (props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [myEvents, setEvents] = useState([]);
  useEffect(() => {
    axios.get('/api/getEvents').then(res => {
      console.log(res.data);
      setEvents(res.data);
    })
  }, [])
  const getEventsByDate = function(dateStr){
    return myEvents.filter(event => event.start === dateStr);
  }
  const dateClick = function(info){
    const dateEvents = getEventsByDate(info.dateStr)
    history.push({
      pathname:'/dateInfo',
      state:{
        currentEvent:dateEvents[0],
        totalEvents:dateEvents
      },
    });
    
  }
  const eventClick = function(eventClickInfo){
    console.log(eventClickInfo.event.extendedProps.selectValue);
    dispatch(changeKenes(eventClickInfo.event.extendedProps.selectValue))
    history.push({
      pathname:'/dateInfo',
    });
  }
  
  return (
    <>
      <FullCalendar
        className='calendar'
        plugins={[dayGridPlugin,listPlugin,interactionPlugin]}
        initialView='dayGridMonth'
        locale={heLocale}
        height={650}
        events={myEvents}
        defaultAllDay={true}
        headerToolbar={calendarConfig.toolbarConfig}
        dateClick={dateClick}
        eventClick={eventClick}
        buttonText={calendarConfig.textConfig}
      />
    </>
  );
}

export default EventsCalendar;