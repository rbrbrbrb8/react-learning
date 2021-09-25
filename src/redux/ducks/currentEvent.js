
const CHANGE_KENES = 'change_kenes';


export const changeKenes = (kenesName) => ({
  type:CHANGE_KENES,
  kenesName:kenesName
});

const initialState = {
  currentEvent: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_KENES:
      console.log(`kenesName:${action.kenesName} `);
      return {...state,currentEvent:action.kenesName}
    default:
      return state;
  }
}