import Ember from 'ember';

export default Ember.Component.extend({
  bookmarkedQuestions: Ember.inject.service(),

  actions: {
    bookmark(question) {
      this.get('bookmarkedQuestions').add(question);
    }
  }
});
