import Duce from './duce';

class Open extends Duce {

  defaultState = true;

  openTips = () => ( this.replace(true) )
  closeTips = () => ( this.replace(false) )
}

export default Open.reducer();
