import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  query: DS.attr(),
  details: DS.attr(),
  answers: DS.hasMany('answer', { async: true })
});
