import Ember from 'ember';

export default Ember.Component.extend({
  bookmarkedQuestions: Ember.inject.service(),

  actions: {
    remove(question) {
      this.get('bookmarkedQuestions').remove(question);
    }
  }
});
