import React from 'react';
import Team from './Team';
import Venue from './Venue';
import DateAndTime from './DateAndTime';
import './NextFixture.css'

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
    return(
      <div id="next-fixture-container">
      <h3>Next Fixture</h3>
      <div id="teams-display">
      <div className='team'>
      <Team {...this.state.nextFixture.homeTeam} />
      </div>
      <div>vs</div>
      <div className='team'>
      <Team className='team' {...this.state.nextFixture.awayTeam} />
      </div>
      </div>
      <Venue {...this.state.nextFixture.homeTeam} />
      <DateAndTime {...this.state.nextFixture} />
      </div>

      )
  }
}

export default NextFixtureContainer;