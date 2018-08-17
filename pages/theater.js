import Layout from "../components/MyLayout";
import React, { Component } from "react";
import {inject, observer} from "mobx-react"

@inject('BaseStore') @observer
class Theater extends Component {
  constructor(props){
    super(props);
    this.state={};
    this.getArea=this.getArea.bind(this);
  }
  getArea(){
    return new Promise(function (resolve, reject){ navigator.geolocation.getCurrentPosition( function (position) {
     resolve({latitude: position.coords.latitude, longitude: position.coords.longitude});
    })
  });
  }
  componentDidMount(){
    this.getArea().then((location)=>this.setState(location));
  }
  render(){
    const {BaseStore}=this.props;
    console.log(BaseStore);
    return (
      <div>
        <h4>영화관</h4>
        {BaseStore.theater.map((val)=> <p>{val.title}</p>)}
        <p>위도: {this.state.latitude}</p>
        <p>경도: {this.state.longitude}</p>
      </div>
      
    )
  }
}

export default Theater;