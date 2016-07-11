import { connect } from 'react-redux';
import Tips from '../components/Tips';
import { isTipsOpen, getTips, getCurrentTipId, tipsCount } from '../reducers/tips';
import { closeTips, setCurrentTip } from '../actions';

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