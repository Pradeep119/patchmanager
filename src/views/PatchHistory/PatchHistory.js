import React, { Component } from 'react';
import './styles.css';
import DataTable from 'react-data-table-component';
import { getApi } from '../../config/Api'
import {patchcoloumn} from '../../util/Constants'
import {patchurl , headers} from '../../config/ApiUrl'

export default class PatchHistory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataarray: 0,
      isLoading:true
    };
  }

  async getAllPatches() {

    this.setState({
      dataarray: await getApi(patchurl, headers),
      isLoading:false
    })
  }

  componentDidMount() {
    this.getAllPatches()

  }

  render() {
    return (
      <div className="App">
        <DataTable
          columns={patchcoloumn}
          data={this.state.dataarray}
          paginationRowsPerPageOptions={20}
          paginationPerPage={20}
          progressPending={this.state.isLoading}
        />
      </div>
    );
  }

}





