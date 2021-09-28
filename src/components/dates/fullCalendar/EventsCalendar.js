import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import heLocale from '@fullcalendar/core/locales/he';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import axios from 'axios';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { changeKenes } from '../../../redux/ducks/currentEvent';
import { setDateEvents } from '../../../redux/ducks/dateEvents';
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
  const getEventsByDate = function (dateStr) {
    return myEvents.filter(event => event.start === dateStr);
  }
  const getDateEventsObj = events => {
    return events.reduce((eventsObj, event) => {
      const extendedProps = event.extendedProps;
      const details = extendedProps.details;
      eventsObj[extendedProps.selectValue] = {
        displayName: event.title,
        colorScheme:extendedProps.colorScheme,
        details:{
          invited:details.invited || 0,
          came:details.came || 0,
          haveGrades:details.haveGrades || 0,
          haveSheelon:details.haveSheelon || 0 //watch out for undefined details, can crash app
        },
        gradesData:extendedProps.gradesData,
        recData:extendedProps.recData
      };
      return eventsObj;
    }, {});
  }
  const dateClick = function (info) {
    const dateEvents = getEventsByDate(info.dateStr);
    console.log(dateEvents);
    if (dateEvents.length) {
      dispatch(changeKenes(dateEvents[0].extendedProps.selectValue));
      dispatch(setDateEvents(getDateEventsObj(dateEvents)));     
      history.push({
        pathname: '/dateInfo',
        state: {
          currentEvent: dateEvents[0],
          totalEvents: dateEvents
        },
      });
    }
  }
  const eventClick = function (eventClickInfo) {
    const dateEvents = getEventsByDate(eventClickInfo.event.startStr);
    dispatch(changeKenes(eventClickInfo.event.extendedProps.selectValue));
    dispatch(setDateEvents(getDateEventsObj(dateEvents)));
    history.push({
      pathname: '/dateInfo',
    });
  }

  return (
    <>
      <FullCalendar
        className='calendar'
        plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
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