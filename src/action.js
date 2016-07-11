import { createAction } from 'redux-actions';


export const setCurrentTip = createAction('SET_CURRENT_TIP', id => (id));
export const closeTips = createAction('CLOSE_TIPS');
export const openTips = createAction('OPEN_TIPS');