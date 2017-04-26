import React from 'react';

class DateAndTime extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      date: "",
      time: null
    }
  }

  // componentWillMount(){
  //   console.log(this.props.unixTime);
  //   const dateObject = new Date(this.props.unixTime * 1000);
  //   this.setState({
  //     date: dateObject.toLocaleDateString(),
  //     time: dateObject.toLocaleTimeString()
  //   })
  // }

  render(){
    return(
      <div>
        <div id='gameDate'>
        {this.props.date}, {this.props.time}
        </div>
      </div>
      )
  }
}

// DateAndTime.defaultProps = {
//   unixTime: null
// }

export default DateAndTime;