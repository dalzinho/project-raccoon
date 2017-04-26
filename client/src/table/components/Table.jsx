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
    { 
      header: '',
      accessor: 'rank',
      maxWidth: 30
    },
    { 
      header: 'Team',
      accessor: 'name',
      sortable: false,
      minWidth: 200,
      maxWidth: 200
    },
    { 
      header: 'P',
      accessor: 'p',
      sortable: false,
      maxWidth: 40
    },
    { 
      header: 'W',
      accessor: 'ow',
      sortable: false,
      maxWidth: 40
    },
    { 
      header: 'D',
      accessor: 'od',
      sortable: false,
      maxWidth: 40
    },
    { 
      header: 'L',
      accessor: 'ol',
      sortable: false,
      maxWidth: 40
    },
    { 
      header: 'F',
      accessor: 'of',
      sortable: false,
      maxWidth: 40
    },
    { 
      header: 'A',
      accessor: 'oa',
      sortable: false,
      maxWidth: 40
    },
    { 
      header: 'GD',
      accessor: 'gd',
      sortable: false,
      maxWidth: 40
    },
    { 
      header: 'Std',
      accessor: 'score',
      sortable: true,
      maxWidth: 40
    },
    { 
      header: 'Pts',
      accessor: 'pts',
      maxWidth: 40
    }
    ]
    return (
      <div>
      <ReactTable
      minWidth={300}
      maxWidth={600}
      showPagination={false}
      resizable={false}
      defaultPageSize={12}
      data={this.state.data}
      columns={columns}
      />
      </div>
      )
  }
}

export default Table;