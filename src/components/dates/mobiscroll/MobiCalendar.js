import React, { useState, useEffect, useCallback, useMemo } from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, getJson, toast, localeHe } from '@mobiscroll/react';
import axios from 'axios';
import '../../../css/mobiCal.css'
import { useHistory } from 'react-router';

function MobiCalendar() {

  const [myEvents, setEvents] = useState([]);
  const history = useHistory();
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
    history.push({
      pathname:'/dateInfo',
      state:{
        currentEvent:event.event,
        totalEvents:event.inst.props.data
      },
    });
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