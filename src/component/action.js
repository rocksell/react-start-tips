import { createAction } from 'redux-actions';
import { API_SERVICES } from '../config/config';


export const setCurrentTip = createAction('SET_CURRENT_TIP', id => (id));
export const closeTips = createAction('CLOSE_TIPS');
export const openTips = createAction('OPEN_TIPS');