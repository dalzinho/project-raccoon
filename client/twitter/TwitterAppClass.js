var Twitter = require('twitter');
require('dotenv').config()


class TwitterApp {
  
  getTweets(){

    var client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    var params = {screen_name: 'pollokfc'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        tweets.forEach((tweet) => {
          console.log('Tweet:', tweet.text);
        });
       return tweets;
     } else {
      console.error(error);
    }
  })

  }
}

module.exports = TwitterApp;
