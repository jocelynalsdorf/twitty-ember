Twitty.TweetController = Ember.ObjectController.extend({
	isEditing: false,
	isAdding: false,
	actions: {
		edit: function() {
			this.set('isEditing', true);
		},
		save: function() {
			this.set('isEditing', false);
		}
	}

});