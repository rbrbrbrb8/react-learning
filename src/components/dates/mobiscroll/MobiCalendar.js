import React, { useState, useEffect, useCallback, useMemo } from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast, localeHe } from '@mobiscroll/react';
import axios from 'axios';
import '../../../css/mobiCal.css'

function MobiCalendar() {

  const [myEvents, setEvents] = React.useState([]);

  useEffect(() => {
    axios.get('/api/getEvents').then(res => {
      console.log(res.data);
      setEvents(res.data);
    })
  }, []);

  const onEventClick = useCallback((event) => {
    // toast({
    //   message: event.event.title
    // });
    console.log(event.date.toLocaleDateString('en-GB'));
  }, []);

  const view = useMemo(() => {
    return {
      calendar: { labels: true }
    };
  }, []);

  return (
    <div className="event-calendar-container">
      <Eventcalendar
        locale={localeHe}
        theme="windows"
        themeVariant="light"
        clickToCreate={false}
        dragToCreate={false}
        dragToMove={false}
        dragToResize={false}
        height={697}
        data={myEvents}
        view={view}
        onEventClick={onEventClick}
        invalid={[
          {
            recurring: {
              repeat: 'weekly',
              weekDays: 'FR,SA'
            }
          }
        ]}
      />
    </div>
  );
}

export default MobiCalendar;