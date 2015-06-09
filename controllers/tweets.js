Twitty.TweetsController = Ember.ArrayController.extend({
	actions: {
		sortByTweetDate: function() {
			this.set('sortProperties', ['date']);
		}, 
		add: function() {
			this.set('isAdding', true);
		},
		saveTweet: function() {
			this.set('isAdding', false);
			
		}
	}
});