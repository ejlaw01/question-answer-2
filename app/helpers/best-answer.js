import Ember from 'ember';

export function bestAnswer(params) {
  var question = params[0];
  // var answers = question.get('answers');

  if(question.get('answers').get('length') >= 3) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
    }
  }

  // for (var i = 0; i < question.get('answers').get('length'); i++) {
  //   if (answers[i].get('upvotes') > 5) {
  //     return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  //   }
  // }

export default Ember.Helper.helper(bestAnswer);
