const SET_DATE_EVENTS = 'set_date_events';

export const setDateEvents = (eventsObj) => ({
  type:SET_DATE_EVENTS,
  data:eventsObj
});

const initialState ={
  eventsData:{}
};

export default (state=initialState,action) => {
  switch (action.type) {
    case SET_DATE_EVENTS:
      return {...state, eventsData:action.data};
    default:
      return state;
  }
}