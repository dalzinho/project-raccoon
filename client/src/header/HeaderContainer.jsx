import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderCrest from './HeaderCrest';
import HeaderSponsor from './HeaderSponsor';
import Subtitle from './Subtitle';
import './Header.css';

class HeaderContainer extends React.Component{
	render(){
		return (
      <div id="header-container">
      <div>
			<HeaderCrest />
      </div>
      <div id="header-text">
			<HeaderTitle />
      <Subtitle />
			</div>
      <div>
      <HeaderSponsor />
      </div>
      </div>
			)
	}
}

export default HeaderContainer;