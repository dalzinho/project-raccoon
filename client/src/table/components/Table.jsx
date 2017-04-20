import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  fetchData(){
    return fetch('http://localhost:3001/api/table')
    .then( (response) => {return response.json()} )
    .then( (json) => this.setState({
      data: json
    }))
    .catch( (error) => {console.log(error)} );
  }
  

  componentDidMount(){
    this.fetchData();
  }

  render(){
    const columns = [
    { header: 'Rank', accessor: 'rank'},
    { header: 'Team', accessor: 'name'},
    { header: 'P', accessor: 'p'},
    { header: 'W', accessor: 'ow'},
    { header: 'D', accessor: 'od'},
    { header: 'L', accessor: 'ol'},
    { header: 'F', accessor: 'of'},
    { header: 'A', accessor: 'oa'},
    { header: 'GD', accessor: 'gd'},
    { header: 'Std', accessor: 'score'},
    { header: 'Pts', accessor: 'pts'}
    ]
    return (
      <div>
      <ReactTable 
      data={this.state.data}
      columns={columns}
      />
      </div>
      )
  }
}

export default Table;