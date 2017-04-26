import React from 'react';
// import ReactTable from 'react-table';
import Table from '../components/Table';
import '../table.css'

class TableContainer extends React.Component{
  render(){
    return <div id='table'><Table /></div>
  }
}

export default TableContainer;