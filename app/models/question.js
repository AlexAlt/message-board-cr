import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  question: DS.attr(),
  details: DS.attr(),
  answer: DS.hasMany('answer', {async: true})
});
