import _ from 'lodash';

export default class Duce {

  static RESERVED_FUNCTIONS = ['set', 'reduce', 'delete', 'replace', '_functionMap'];

  defaultState = { }

  state = { }

  replace = (value) => {
    return value;
  }

  set = (key, value) => {
    return { ...this.state, [key]: value }
  }

  delete = (key) => {
    return _.omit(this.state, key);
  }

  union = (key, value) => {
    return { ...this.state, [key]: _.union(this.state[key], _.flatten([value])) }
  }

  without = (key, value) => {
    return { ...this.state, [key]: _.without(this.state[key], value) }
  }

  _functionMap = () => {
    const functions = _.omit(_.keyBy(_.functions(this)), Duce.RESERVED_FUNCTIONS);
    const functionNames = _.mapKeys(functions, (value, key) => ( _.toUpper(_.snakeCase(key)) ));
    return _.mapValues(functionNames, value => ( this[value] ));
  }

  reduce = () => {
    const functionMap = _.memoize(this._functionMap)();

    return (state = this.defaultState, action) => {
      if (!functionMap[action.type]) return state;
      this.state = state;
      return functionMap[action.type](action.payload);
    }
  }

  static reducer = function() {
    return new this().reduce();
  }

}