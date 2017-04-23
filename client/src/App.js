import React from 'react';
import TableContainer from './table/containers/TableContainer';
import HeaderContainer from './header/HeaderContainer';

class App extends React.Component{
  render(){
  return(
    <div>
    <div>
    <div>
    	<HeaderContainer />
    </div>
    <TableContainer />
    </div>
    </div>
    )
  }
}

export default App;