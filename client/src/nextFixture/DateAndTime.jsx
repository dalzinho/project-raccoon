import React from 'react';

class DateAndTime extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: "",
      time: null
    }
  }

  componentDidMount(){
    console.log(this.props.unixTime);
    const dateObject = new Date(this.props.unixTime);
    this.setState({
      date: dateObject.toLocaleDateString(),
      time: dateObject.toLocaleTimeString()
    })
  }

  render(){
    return(
      <div>
        <div id='gameDate'>
        {this.state.date}
        </div>

        <div id='gameTime'>
        {this.state.time}
        </div>
      </div>
      )
  }
}

// DateAndTime.defaultProps = {
//   unixTime: null
// }

export default DateAndTime;