import React, { Component } from 'react';
import './styles.css';


import axios from 'axios';
import DataTable from 'react-data-table-component';

import {getApi} from '../Api/Api'

const productcoloumn = [

  {
    name: 'Product Id',
    selector: 'id',
    sortable: true,
  },
  {
    name: 'Product Name',
    selector: 'name',
    sortable: true,

  },
  {
    name: 'Git Url',
    selector: 'git_url',
    sortable: true,

  }

]

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataarray: 0,
    };
  }

  componentDidMount() {
    this.getAllProducts()
    

  }

  async getAllProducts() {

    console.log("loggggggggggg token "+localStorage.getItem('token'))

    var url = 'http://localhost:8080/patch/allproducts'
    var headers = { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') } 
    // var headers = { 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGV4QGFwaWdhdGUuY29tIiwic2NvcGVzIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpc3MiOiJodHRwOi8vZGV2Z2xhbi5jb20iLCJpYXQiOjE1Njg4MDg1MDksImV4cCI6MTU2ODgyNjUwOX0.6j6IPKkQ3HEphQa1YQRmfMQiELRsOp84sbYhhIJo0P8' }
    
    // Bearer
    this.setState({
      dataarray: await getApi(url,headers)
    })
  }

  render() {
    




    return (
      <div className="App">

        <DataTable
        // title="Products"
        columns={productcoloumn}
        data={this.state.dataarray}
    

        // paginationRowsPerPageOptions={5}
        // paginationPerPage={5}
        // paginationTotalRows={10}
        // pagination={true}   this has error
      />
      </div>

    );
  }
  
}


