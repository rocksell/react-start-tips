import Duce from './duce';

class CurretTip extends Duce {

  defaultState = 0;

  setCurrentTip = (id) => ( this.replace(id) )
}

export default CurretTip.reducer();
