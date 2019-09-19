import React, { Component } from 'react';
import './styles.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import {getApi} from '../Api/Api'

const patchcoloumn = [

  {
    name: 'Bundle Name',
    selector: 'bundle_name',
    sortable: true,
    
  },
  {
    name: 'component',
    selector: 'componnents',
    sortable: true,
    
  },
  {
    name: 'Date',
    selector: 'date',
    sortable: true,
    
  },
  {
    name: 'Description',
    selector: 'description',
    sortable: true,
    
  },
  {
    name: 'Developer',
    selector: 'developer_name',
    sortable: true,
    
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
    
  },
  {
    name: 'Git Tag',
    selector: 'git_tag',
    sortable: true,
    
  },
  {
    name: 'Id',
    selector: 'id',
    sortable: true,
    
  },
  {
    name: 'Merged To Master',
    selector: 'merged_to_master',
    sortable: true,
    
  },
  {
    name: 'Merged To Support',
    selector: 'merged_to_support',
    sortable: true,
    
  },
  {
    name: 'Patch Id',
    selector: 'patch_id',
    sortable: true,
    
  },
  {
    name: 'Priority',
    selector: 'priority',
    sortable: true,
    
  },
  {
    name: 'Product Id',
    selector: 'product.id',
    sortable: true,
    
  },
  {
    name: 'Product Name',
    selector: 'product.name',
    sortable: true,
    
  },
  {
    name: 'Git Url',
    selector: 'product.git_url',
    sortable: true,
    
  },
  {
    name: 'Project Name',
    selector: 'project_name',
    sortable: true,
    
  },
  {
    name: 'Public Jira Id',
    selector: 'public_jira_id',
    sortable: true,
    
  },
  {
    name: 'Support Jira Id',
    selector: 'support_jira_id',
    sortable: true,
    
  }


 
]




export default class PatchHistory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataarray: 0,
    };
  }



async getAllPatches() {
  var url = 'http://localhost:8080/patch/allpatches'
  var headers = { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') } 

  this.setState({
    dataarray: await getApi(url,headers)
  })
}

componentDidMount() {
    this.getAllPatches()
  
}
  render() {

    

    return (
      <div className="App">
        
      <DataTable
        // title="Patches"
        columns={patchcoloumn}
        data={this.state.dataarray}
    

        paginationRowsPerPageOptions={20}
        paginationPerPage={20}
        // pagination={true}   this has error
      />
  </div>

    );
  }
}





