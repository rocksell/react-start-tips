import CSSModules from 'react-css-modules';
import Transition from 'react-motion-ui-pack';

import Tips from './Tips';
import styles from './Tips.scss';

export default
@CSSModules(styles)

class TipsWrap extends React.Component {
  constructor(props) {
    super(props);
    if (typeof(this.props.firstSession) === "undefined") {
      this.isFirstSession = !localStorage.getItem(this.props.name + 'hasSession');
      localStorage.setItem(this.props.name + 'hasSession', 'true');
    } else {
      this.isFirstSession = this.props.firstSession;
    }
  }
  render() {

    if (!this.isFirstSession) return null;
    return (
      <Transition enter={{opacity: 1}} leave={{opacity: 0}}>
      {  this.props.open &&
          <div key="Tips" styleName="popup">
            <Tips {...this.props} />
          </div>
      }
    </Transition>
    );
  }
}
