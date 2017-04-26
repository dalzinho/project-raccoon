import React from 'react';

class Venue  extends React.Component{
  render(){
    return (
      <div>
      <div id='groundName'>{this.props.homeGround.groundName}, {this.props.homeGround.groundTown}</div>
      </div>
      )
  }
}


Venue.defaultProps = {
  homeGround: {
    groundName: null,
    groundTown: null
  }
}

export default Venue;
