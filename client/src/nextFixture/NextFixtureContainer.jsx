import React from 'react';

class NextFixtureContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      nextFixture: {},
    };
  }

  getNextFixture(){
    return fetch('http://www.example.com:3001/api/fixtures')
    .then((response) => {return response.json()})
    .then( (json) => {this.setState({
      nextFixture: json[0]
    })
  })
    .catch( (error) => {console.error(error)
    .then( () => console.log('hello'));
    });
  }

  componentDidMount(){
    this.getNextFixture();
  }

 

  render(){
    return(<div>
      {this.state.nextFixture.toString()}

      </div>)
  }
}

export default NextFixtureContainer;