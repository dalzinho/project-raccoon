import React from 'react';
import Team from './Team';
import Venue from './Venue';
import DateAndTime from './DateAndTime';

class NextFixtureContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nextFixture: {},
    };
  }

  getNextFixture(){
    fetch('http://www.example.com:3001/api/fixtures')
    .then((response) => {return response.json()})
    // .then(data => console.log(data) )
    .then( (json) => {this.setState({ nextFixture: json[0] }) })
    // .catch( (error) => {console.error(error)});
  }

  componentWillMount(){
    this.getNextFixture();
  }

  render(){
    return(<div>
      <Team  {...this.state.nextFixture.homeTeam} />
      <div>
      vs
      </div>
      <Team {...this.state.nextFixture.awayTeam} />
      <Venue {...this.state.nextFixture.homeTeam} />
      <DateAndTime unixTime={this.state.nextFixture.unixTime} />
      </div>)
  }
}

export default NextFixtureContainer;