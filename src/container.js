import { connect } from 'react-redux';
import Tips from './component';
import { isTipsOpen, getTips, getCurrentTipId, tipsCount } from './reducer';
import { closeTips, setCurrentTip } from './action.js';

const mapStateToProps = (state) => {
  return {
    open: isTipsOpen(state),
    currentTipId: getCurrentTipId(state),
    tips: getTips(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseTips: () => { dispatch(closeTips()); },
    setCurrentTip: (id) => {dispatch(setCurrentTip(id))}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tips);