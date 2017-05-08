import React from 'react';
import TableContainer from './table/containers/TableContainer';
import HeaderContainer from './header/HeaderContainer';
import NextFixtureContainer from './nextFixture/NextFixtureContainer';
import TweetContainer from './tweets/TweetContainer'
import './App.css'

class App extends React.Component{
  render(){
  return(
    <div>
    <div>
    	<HeaderContainer id='HeaderContainer'/>
    </div>
    <div id='content-container'>
    <div>
      <NextFixtureContainer />
    </div>
    <div>
      <TableContainer />
    </div>
    <div>
    <TweetContainer />
    </div>
    </div>
    </div>
    )
  }
}

export default App;