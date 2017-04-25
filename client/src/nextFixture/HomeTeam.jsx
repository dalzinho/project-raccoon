import React from 'react';

class HomeTeam extends React.Component{

  render(){
    return(
      <div>
      <div>{this.props.fullName}</div>
      <div><img src={this.props.crestUrl} /></div>
      </div>
      )
  }
}

HomeTeam.defaultProps = {
  fullName: "Loading..."
}

export default HomeTeam;