import React, { Component } from 'react';
import './styles.css';
import DataTable from 'react-data-table-component';
import { getApi } from '../../config/Api'
import { productcoloumn } from '../../util/Constants'
import { producturl, headers } from '../../config/ApiUrl'

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataarray: 0,
      isLoading: true
    };
  }

  componentDidMount() {
    this.getAllProducts()

  }

  async getAllProducts() {
    this.setState({
      dataarray: await getApi(producturl, headers),
      isLoading: false
    })
  }

  render() {

    return (
      <div className="App">
        <DataTable
          columns={productcoloumn}
          data={this.state.dataarray}
          progressPending={this.state.isLoading}
        />
      </div>

    );
  }

}


