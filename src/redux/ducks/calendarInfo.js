const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MONTH_FORWARD = 'month_forward';
const MONTH_BACKWARD = 'month_backward';

export const monthForward = () => ({
  type: MONTH_FORWARD
});

export const monthBackward = () => ({
  type: MONTH_BACKWARD
});

const buildNewArr = daysToAdd => {
  const arr = [];
  for(let i = 1; i <=daysToAdd;i++){
    arr.push(i);
  }
  return arr;
}

const getDaysInfo = (newMonthIndex) => {
  switch (newMonthIndex){
    case 1:
      return 28;
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31;
    default:
      return 30;
    
  }
}

const initialState = {
  month: 'August',
  monthIndex: 7, //always month number - 1
  year: 2021,
  startIndex: 0,
  endIndex: 35, //always has to be startIndex +/- 35
  daysArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

}

export default (state = initialState, action) => {
  switch (action.type) {
    case MONTH_FORWARD: {
      const check = state.monthIndex === 11;
      const newMonthIndex = check ? 0 : state.monthIndex + 1;
      const newYear = check ? state.year : state.year + 1;
      const daysToAdd = getDaysInfo(newMonthIndex);
      const newStartIndex = state.startIndex + daysToAdd;
      const daysToAddArr = buildNewArr(daysToAdd);
      return {
        month: months[newMonthIndex],
        monthIndex: newMonthIndex,
        year: newYear,
        startIndex:newStartIndex,
        endIndex:newStartIndex +35,
        daysArr:state.daysArr.concat(daysToAddArr)
      }
    }
    case MONTH_BACKWARD:{
      return ;
    }


  }
}