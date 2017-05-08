import React from 'react';
import Tweet from './Tweet';

class TweetContainer extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      tweets: [{
        text: 'loading…'
      }]
    }
  }


  getTweets(){
    fetch('http://localhost:3001/api/twitter')
    .then( json => {this.setState({tweets: json})})
    .catch( error => console.error(error))
  }

  componentWillMount(){
    this.getTweets()
  }

  render(){
    // const tweetComponents = this.state.tweets.map((tweet) => {
    //   return (

    //     <Tweet>
    //     {tweet.text}
    //     </Tweet>
    //     )
    // })

    return (
      <div>
      some text here
      </div>
      )
  }
}

export default TweetContainer;