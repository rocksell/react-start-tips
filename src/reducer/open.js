const defaultState = true;

const Open = (state = defaultState, action) => {
  switch (action.type) {
    case 'OPEN_TIPS':
      return true;
    case 'CLOSE_TIPS':
      return false;
    default:
      return state;
  }
};

export default Open;
