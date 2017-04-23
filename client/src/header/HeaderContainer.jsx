import React from 'react';
import HeaderTitle from './HeaderTitle';
import HeaderCrest from './HeaderCrest';

class HeaderContainer extends React.Component{
	render(){
		return (
			<div>
			<HeaderCrest />
			<HeaderTitle />
			</div>
			)
	}
}

export default HeaderContainer;