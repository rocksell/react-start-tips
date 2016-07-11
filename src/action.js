import { createAction } from 'redux-actions';


const setCurrentTip = createAction('SET_CURRENT_TIP', id => (id));
const closeTips = createAction('CLOSE_TIPS');
const openTips = createAction('OPEN_TIPS');

export default {setCurrentTip, closeTips, openTips }