const PRAT = 'prat';
const DELTA = 'delta';
const ADAMA = 'adama';
const HEBREW = 'hebrew';
const KAFBET = 'kafbet';

export const prat = () => ({
  type: PRAT
});

export const delta = () => ({
  type: DELTA
});

export const adama = () => ({
  type: ADAMA
});

export const hebrew = () => ({
  type: HEBREW
});

export const kafbet = () => ({
  type: KAFBET
});


const initialState = {
  currentEvent: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PRAT:
      return {currentEvent:'prat'};

    case DELTA:
      return {currentEvent:'delta'};

    case ADAMA:
      return {currentEvent:'כנס אדמה'};

    case HEBREW:
      return {currentEvent:'כנס עברית'};

    case KAFBET:
      return {currentEvent:'כנס כ"ב'};
    
    default:
      return state;
  }
}