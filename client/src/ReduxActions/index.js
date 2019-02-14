import React, {Component} from 'react';
import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import {
  requestAddItem
} from '../modules/ui/actions'

class ReduxActions extends Component{
  constructor(){
    super()
    this.state = {}
  }
  textChanged = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  buttonClicked = () => {
    this.props.requestAddItem(this.state.textBox);
  };


  render(){
    return(
      <div>
        <input name="textBox" onChange={this.textChanged}></input>
        <button onClick={this.buttonClicked}>Add Item</button>
        <br />
        {/* <pre style={{textAlign:"left"}}>
          {this.props.pageData && JSON.stringify(this.props.pageData, null, 2)}
        </pre> */}
      </div>
    )
  }
};

function mapStateToProps(appState,ownProps){

  return {

  }
}
function mapDispatchToProps(dispatch){
  return {
      ...bindActionCreators({
        requestAddItem
      }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxActions);