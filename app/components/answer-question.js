import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var  params = {
        author: this.get('author') ? this.get('author'):"",
        response: this.get('response') ? this.get('response'):"",
        upvotes: 0,
        question: this.get('question')  ? this.get('question'):""
      };
      this.set('addNewAnswer', false);
      this.set('author', '');
      this.set('query', '');
      this.set('details', '');
      this.sendAction('saveAnswer', params);
    }
  }
});
