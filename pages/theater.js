import Layout from "../components/MyLayout";
import React, { Component } from "react";
import {inject, observer} from "mobx-react"

@inject('BaseStore') @observer
class Theater extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {BaseStore}=this.props;
    console.log(BaseStore);
    return (
      <div>
        <h4>영화관</h4>
        {BaseStore.theater.map((val)=> <p>{val.title}</p>)}
      </div>
      
    )
  }
}

export default Theater;