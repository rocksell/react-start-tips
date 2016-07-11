import tips from './config';
import { combineReducers } from 'redux';
import open from './open';
import currentTip from './currentTip';

const Tips = combineReducers({
  open,
  currentTip
});

export default Tips;

export const isTipsOpen = state => state.tips.open;
export const getCurrentTipId = state => state.tips.currentTip;
export const getTips = () => tips;
