import Reflux from 'reflux';

export default {

  initStore(str){
    str.prototype.rehydrate = function(state){
      this.setState(state);
    };
    Reflux.initStore(str);
  },

  createActions(actions){
    let rehydrateActions = ['rehydrate'];
    actions = rehydrateActions.concat(actions);
    return Reflux.createActions(actions);
  } 

};