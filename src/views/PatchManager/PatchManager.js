import React, { Component } from 'react';
import {  Button } from 'reactstrap';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { textAlign } from '@material-ui/system';
import Icon from '@material-ui/core/Icon';
import './styles.css';
import { MDBIcon } from 'mdbreact';
import axios from 'axios';
import {postApi,getApi} from '../../config/Api'
import { patch_save_url,generate_patch_id_url,get_product_list_url} from '../../config/ApiUrl'
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css'

//import '@fortawesome/fontawesome-free/css/all.min.css';

import PopupModal from '../../containers/PopUpModal/PopUpModal'

export default class PatchManager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      developerName: '',
      gitTag:'',
      componnents:'',
      projectName:'',
      bundletName:'',
      supportJiraId:'',
      publicJiraId:'',
      mergedToSupport:'',
      mergedToMaster:'',
      patchDescription:'',
      products:[],
      priority:'',
      patchDate:'',
      selectedProduct: '',
      generatedPacthId :'',
      selectedProduct1:'',
      errorGitTag:'',
      errorDeveloperName: '',
      errorComponenets:'',
      errorDate:'',
      errorpublicJira:'',
      errorSupportJira:'',
      errorpriority:'',
      errormergedtoSupport:'',
      errormergedtoMaster:'',

      
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getAllProducts()
  }

  async getAllProducts() {

    console.log("loggggggggggg token "+localStorage)

  
    var headers = { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') } 
    this.setState({
      products: await getApi(get_product_list_url,headers)
    })
  }

  getGeneratedPatchId_a(){
    this.getGeneratedPatchId()
  }

  async getGeneratedPatchId() {
    var y = this.state.selectedProduct
    this.state.selectedProduct1 = y
    var url = generate_patch_id_url+y;
    var headers = { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') } 
    var x = await getApi(url,headers)
    this.setState({
      generatedPacthId: x
    })
    alert("Generated Patch Id : " + this.state.generatedPacthId)
    this.state.selectedProduct1 = y
    this.saveData()
  }



  handleChange(evt) {
    var error = false
    var componenetNames= this.state.componenetNames
    var patchDate = this.state.patchDate
    var supportJiraId = this.state.supportJiraId
    var publicJiraId = this.state.publicJiraId
    var mergedToMaster = this.state.mergedToMaster
    var mergedToSupport = this.state.mergedToSupport.length

    this.setState({ [evt.target.name]: evt.target.value });

    if(this.state.gitTag.length < 5){
      this.state.errorGitTag = "Git Tag Too short"
      error = true
    }
    if(this.state.developerName.match(/^[0-9]+$/) != null){
      this.state.errorDeveloperName = "Invalid Name"
      error = true
    }
    if(componenetNames === undefined || componenetNames === null || componenetNames === ''){
      this.state.errorComponenets = "Invalid Components name"
      error = true
    }
    if(patchDate === undefined || patchDate === null || patchDate === ''){
      this.state.errorDate = "Please select Date"
      error = true
    }
    if(supportJiraId === undefined || supportJiraId === null || supportJiraId === ''){
      this.state.errorSupportJira = "Please eneter valid Support Jira Id"
      error = true
    }
    if(publicJiraId === undefined || publicJiraId === null || publicJiraId === ''){
      this.state.errorpublicJira = "Please eneter valid Public Jira Id"
      error = true
    }
    if(mergedToMaster === undefined || mergedToMaster === null || mergedToMaster === ''){
      this.state.errormergedtoMaster = "Please state your changes are mereged to master or not"
      error = true
    }
    if(mergedToSupport === undefined || mergedToSupport === null || mergedToSupport === ''){
      this.state.errormergedtoSupport = "Please state your changes are mereged to support or not"
      error = true
    }
    else{
      this.state.errorDeveloperName = ""
      this.state.errorGitTag =""
      this.state.errorDate=""
      this.state.errorComponenets=""
      this.errorSupportJira=""
      this.state.errorpublicJira=""
      this.state.errormergedtoMaster=""
      this.state.errormergedtoSupport=""
      error = false
    }

  }

    mySubmitHandler(event) {

    }
    saveData() {
      this.savePatchDetails()
    }


   async savePatchDetails() {
      var headers = { 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('token') }
      var postbody = {
        "patch_id":this.state.generatedPacthId,
        "date":this.state.patchDate,
        "developer_name":this.state.developerName,
        "git_tag":this.state.gitTag,
        "componnents":this.state.componnents,
        "project_name":this.state.selectedProduct1,
        "bundle_name":this.state.bundletName,
        "support_jira_id":this.state.supportJiraId,
        "merged_to_support":this.state.mergedToSupport,
        "merged_to_master":this.state.mergedToMaster,
        "public_jira_id": this.state.publicJiraId,
        "priority":this.state.priority,
        "description": this.state.patchDescription,
        "email":localStorage.getItem('uname'),
        "patchstatus":"pending"
      }
      try {
        var data = await postApi(patch_save_url, postbody, headers)
        if (data.status == 200) {
          alert(this.state.generatedPacthId+" Saved with status Pending Approval ")
        }
        else{
          throw Error(data.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    }

  render() {
    return (
      
<div class="container1">
  <form onSubmit={this.mySubmitHandler}>
    <div class="row">
      <h4>Patch Details</h4>
      <div class="input-group input-group-icon">
        <input type="text"  name="developerName"  onChange={this.handleChange} placeholder="Developer Name"/>
        <div class="input-icon"><i class="fa fa-user"></i></div>
      </div>
    </div>
    <div class="row">
        <div class="isa_error">
          {this.state.errorDeveloperName}
        </div>
    </div>
    <div class="row">
      <div class="input-group input-group-icon">
        <input type="text" name="gitTag" placeholder="Git Tag" onChange={this.handleChange}/>
        <div class="input-icon"><i class="fa fa-tag"></i></div>
      </div>
    </div>
    <div class="row">
        <div class="isa_error">
          {this.state.errorGitTag}
        </div>
    </div>
    <div class="row">
      <div class="input-group input-group-icon">
        <input type="text" name="componnents" placeholder="componnents" onChange={this.handleChange}/>
        <div class="input-icon"><i class="fa fa-puzzle-piece"></i></div>
      </div>
    </div>
    <div class="row">
        <div class="isa_error">
          {this.state.errorComponenets}
        </div>
    </div>
    <div class="row">
    <div class="input-group input-group-icon">
      <DayPickerInput onDayChange={day => this.setState({patchDate:day})} />
      <div class="input-icon"><i class="fa-product-hunt"></i></div>
    </div>
    <div class="row">
        <div class="isa_error">
          {this.state.errorDate}
        </div>
    </div>
    </div>
    <div class="row">
      <div class="input-group input-group-icon">
        <input type="text" name="bundletName" placeholder="Bundle Name" onChange={this.handleChange}/>
        <div class="input-icon"><i class="fa-product-hunt"></i></div>
      </div>
    </div>
    <div class="row">
      <div class="input-group input-group-icon">
        <input type="text" name="supportJiraId" placeholder="Support Jira Id" onChange={this.handleChange}/>
        <div class="input-icon"><i class="fa-product-hunt"></i></div>
      </div>
    </div>
    <div class="row">
        <div class="isa_error">
          {this.state.errorSupportJira}
        </div>
    </div>
    <div class="row">
      <div class="input-group input-group-icon">
        <input type="text" name="publicJiraId" placeholder="Public Jira Id" onChange={this.handleChange}/>
        <div class="input-icon"><i class="fa-product-hunt"></i></div>
      </div>
    </div>
    <div class="row">
        <div class="isa_error">
          {this.state.errorpublicJira}
        </div>
    </div>
    <div class="row">
      <div class="col-half">
      <h6> Merged To Support</h6>
        <div class="input-group">
          <select name="mergedToSupport" onChange={this.handleChange}>
            <option>yes</option>
            <option>no</option>
          </select>
          </div>
          </div>
      </div>
      <div class="row">
        <div class="isa_error">
          {this.state.errormergedtoSupport}
        </div>
    </div>
      <div class="row">
      <div class="col-half">
      <h6> Merged To Master  </h6>
        <div class="input-group">
          <select name="mergedToMaster" onChange={this.handleChange}>
            <option>yes</option>
            <option>no</option>
          </select>
          </div>
          </div>
      </div>
      <div class="row">
        <div class="isa_error">
          {this.state.errormergedtoMaster}
        </div>
    </div>
      <div class="row">
      <div class="col-half">
      <h6> Patch Priority </h6>
        <div class="input-group">
          <select name="priority" onChange={this.handleChange}>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          </div>
          </div>
      </div>
      <div class="row">
      <div class="input-group input-group-icon">
        <input type="text" name="patchDescription" placeholder="patch Description" onChange={this.handleChange}/>
        <div class="input-icon"><i class="fa-product-hunt"></i></div>
      </div>
    </div>
       <h6>product</h6>
      <div class="row">
      <div class="col-half">
        <div class="input-group">
          {/* <select  onChange={this.handleChange}>
          {this.state.products.map((product) => <option key={product.value} value={product.value}>{product.display}</option>)}
          </select> */}
          <select value={this.state.selectedProduct} 
              onChange={(e) => this.setState({selectedProduct: e.target.value})}>
           {this.state.products.map((product) => <option key={product} value={product}>{product}</option>)}
      </select>
        </div>
      </div>
      </div>
      <div class="row">
      <h4>Terms and Conditions</h4>
      <div class="input-group">
        <input type="checkbox" id="terms"/>
        <label for="terms">I accept the terms and conditions for signing up to this service, and hereby confirm I have read the privacy policy.</label>
      </div>
    </div>
    <div class="row">
    <Button onClick={() => this.getGeneratedPatchId_a()} >Submit</Button>
    </div>
  </form>
</div>

    );
  }
}



























