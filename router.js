Twitty.Router.map(function() {
  this.resource('tweets', {path: '/'});
  this.resource('recent-tweets');
  
  
  this.resource('tweet', {path: '/:tweet_id'});


});
