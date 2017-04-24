import React from 'react';

class NextFixtureContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nextFixture: {},
      homeTeam: null,
      awayTeam: null
    };
  }

  getNextFixture(){
    return fetch('http://www.example.com:3001/api/fixtures')
    .then((response) => {return response.json()})
    .then( (json) => {this.setState({
      nextFixture: json[0]
    })
  })
    .catch( (error) => {console.error(error)});
  }

  setHomeTeam(){
    
  }

  componentDidMount(){
    this.getNextFixture();
  }

  componentDidUpdate(){
    this.setHomeTeam();
  }

  render(){
    return(<div>
      {this.state.nextFixture.toString()}

      </div>)
  }
}

export default NextFixtureContainer;