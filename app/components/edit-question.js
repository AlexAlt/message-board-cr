import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

  actions: {
    updateQuestionFormShow() {
      this.set('updateQuestionForm', true);
    },
    updateQuestion(question) {
    var params = {
        question: this.get('questionInput'),
        details: this.get('details'),
      }

      this.set('updateQuestionForm', false);
      this.sendAction("updateQuestion", question, params);
    }
  }

});
