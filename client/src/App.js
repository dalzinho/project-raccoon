import React from 'react';
import TableContainer from './table/containers/TableContainer';
import HeaderContainer from './header/HeaderContainer';
import NextFixtureContainer from './nextFixture/NextFixtureContainer';

class App extends React.Component{
  render(){
  return(
    <div>
    <div>
    	<HeaderContainer />
    </div>
    <div>
      <NextFixtureContainer />

    </div>
    </div>
    )
  }
}

export default App;