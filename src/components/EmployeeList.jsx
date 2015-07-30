import React from 'react';
import BaseComponent from './BaseComponent';
import Griddle from 'griddle-react';
import api from '../utils/dataService';
import { Card } from 'material-ui';

class EmployeeList extends BaseComponent {

  constructor(props) {
    super(props);
    this._bind('setPage', 'sortData', 'changeSort',  'setFilter');
    this.state = {
    	results: []
    	,currentPage: 0
    	,maxPages: 0
    	,externalResultsPerPage: 5
    	,externalSortColumn: null
    	,externalSortAscending: true
    };
  }

  componentDidMount() {
    this.getExternalData();
  }

  getExternalData() {
  	api.get('/employees')
      .then((response) => {
        const totalCount = response.headers.get('X-Total-Count');
        response.json().then((data) => {
          this.setState({
            results: data
            ,currentPage: 0
            ,maxPages: Math.ceil(totalCount / this.state.pageSize)
            ,isLoading: false
          });
        });
      });
  }

  //what page is currently viewed
  setPage(){}

  //this will handle how the data is sorted
  sortData(){}

  //this changes whether data is sorted in ascending or descending order
  changeSort(){}

  //this method handles the filtering of the data
  setFilter(){}

  //this method handles determining the page size
  setPageSize(){}

  render() {
    return (
      <Card style={{maxWidth: '90%', margin: '20px auto 0'}}>
        <Griddle useExternal={true} externalSetPage={this.setPage}
          externalChangeSort={this.changeSort} externalSetFilter={this.setFilter}
          externalSetPageSize={this.setPageSize} externalMaxPage={this.state.maxPages}
          externalCurrentPage={this.state.currentPage} results={this.state.results}
          resultsPerPage={this.state.externalResultsPerPage}
          externalSortColumn={this.state.externalSortColumn}
          externalSortAscending={this.state.externalSortAscending}
          showFilter={true} showSettings={true}
          columns={['Id', 'FirstName', 'LastName', 'SecondLastName', 'Email']} />
      </Card>
    );
  }
}

export default EmployeeList;