import CSSModules from 'react-css-modules';
import clickOutsideWrapper from 'react-click-outside';
import styles from './Tips.scss';

export default
@clickOutsideWrapper
@CSSModules(styles, {allowMultiple: true})

class Tips extends React.Component {
  static propTypes = {
    currentTipId: React.PropTypes.number.isRequired,
    tips: React.PropTypes.number.isRequired,
    images: React.PropTypes.array.isRequired,
    open: React.PropTypes.bool.isRequired,
    onCloseTips: React.PropTypes.func.isRequired,
    setCurrentTip: React.PropTypes.func.isRequired,
  };

  handleClickOutside(event) {
    if (this.props.open) {
      this.props.onCloseTips();
      event.stopPropagation();
    }
  }

  renderDot(i) {
    const active = i === this.props.currentTipId ? "active" : ""
    return <span styleName={`dot ${active}`} onClick={() => this.props.setCurrentTip(i)}></span>
  }

  renderNextButton = () => {
    return <button styleName="next-btn" onClick={()=>this.props.setCurrentTip(this.props.currentTipId + 1)}>next</button>
  }

  renderLastButton = () => {
    return <button styleName="last-btn" onClick={this.props.onCloseTips}>{"ok,let's go!"}</button>
  }

  render() {
    const tip = this.props.tips[this.props.currentTipId];
    const isLast = this.props.currentTipId === (this.props.tips.length - 1);
    return (
      <div styleName="body">
        <div styleName="close-btn" onClick={this.props.onCloseTips}>SKIP</div>
        <div styleName="header">{tip.header}</div>
        <div styleName="title">{tip.title}</div>
        <img styleName="image"src={this.props.images[this.props.currentTipId + 1]}/>
        <div styleName="dots-wrap">
          {
            this.props.tips.map((t,i) => this.renderDot(i))
          }
        </div>
        {isLast ? this.renderLastButton() : this.renderNextButton()}
      </div>
    );
  }
}
