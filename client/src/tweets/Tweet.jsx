import React from 'react';

class Tweet extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <p>{this.props.children}</p>
      )
  }
}


export default Tweet;