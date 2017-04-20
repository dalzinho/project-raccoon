import React from 'react';
import ReactTable from 'react-table';
import fs from 'fs';
import path from 'path';

class Table extends React.Component {
  constructor(props){
    super(props);
  }

  fetchData(){
    fs.readFile('Users/user/codeclan_work/project_4/site-scraper/leagueTable.json', 'json', (err, data) => {
      if(err) throw err;
      this.props.data = data;
    })
  }

  componentDidMount(){
    this.fetchData();
  }

  render(){
    return (
      <div>
      {this.props.data}
      </div>
      )
  }
}

export default Table;