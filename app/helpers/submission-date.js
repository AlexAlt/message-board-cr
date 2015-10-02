import Ember from 'ember';

export function submissionDate(params) {
  var date = params[0];
  return moment(date).format('lll');
}

export default Ember.Helper.helper(submissionDate);
