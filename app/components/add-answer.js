import Ember from 'ember';

export default Ember.Component.extend({
  addAnswerForm: false,

  actions: {
    addAnswerFormShow(){
      this.set('addAnswerForm', true);
    },

    saveAnswer(answer) {
      var params = {
        user: this.get('user'),
        answer: this.get('answerInput'),
        date_added: Date.now(),
        question: this.get('question')
      };
      debugger;
      this.sendAction('saveAnswer', params);
      this.set('addAnswerForm', false);
    }
  }
});
