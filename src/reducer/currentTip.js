const defaultState = 0

const CurretTip = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_TIP':
      return action.payload;
    default:
      return state;
  }
};

export default CurretTip;
