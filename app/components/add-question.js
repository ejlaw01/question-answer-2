import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },
    saveQuestion() {
      var  params = {
        author: this.get('author') ? this.get('author'):"",
        query: this.get('query') ? this.get('query'):"",
        details: this.get('details') ? this.get('details'):""
      };
      this.set('addNewQuestion', false);
      this.set('author', '');
      this.set('query', '');
      this.set('details', '');
      this.sendAction('saveQuestion', params);
    }
  }
});
