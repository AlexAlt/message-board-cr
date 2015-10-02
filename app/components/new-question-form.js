import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion(params) {
      var params = {
        user: this.get('user'),
        question: this.get('questionInput'),
        details: this.get('details'),
      } 
      this.sendAction('saveQuestion', params);
    }
  }
});
