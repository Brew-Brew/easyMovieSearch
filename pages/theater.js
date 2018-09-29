import React, { Component } from "react";
import {inject, observer} from "mobx-react";
import DevTools from 'mobx-react-devtools';
import FormData from 'form-data';

import {getTheater} from '../util/api';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';


const HeaderWrapper = styled.div`
  margin: 10px;
`;

const ContentWrapper = styled.div`
  margin: 10px;
`;

@inject('BaseStore') @observer
class Theater extends Component {
  
  constructor(props){
    super(props);
    this.state={};
  }

  getArea = () => {
    return new Promise(function (resolve, reject){ navigator.geolocation.getCurrentPosition( function (position) {
     resolve({latitude: position.coords.latitude, longitude: position.coords.longitude});
    })
  });
  }

  getDistance = (lat1, lon1, lat2, lon2, unit) => {
    var radlat1 = Math.PI * lat1/180
    var radlat2 = Math.PI * lat2/180
    var theta = lon1-lon2
    var radtheta = Math.PI * theta/180
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist)
    dist = dist * 180/Math.PI
    dist = dist * 60 * 1.1515
    if (unit=="K") { dist = dist * 1.609344 }
    if (unit=="N") { dist = dist * 0.8684 }
    return dist
  }

  getTheaterInfo = async()=>{
    const { BaseStore }=this.props;
    const {data} = BaseStore;
    const { location} = data;
    const formData = new FormData();
    formData.append(
      'paramList', JSON.stringify(
        {"MethodName":"GetCinemaItems",
        "channelType":"HO",
        "osType":"Chrome",
        "osVersion":""}));
    const result = await getTheater(formData);
    if(result.data.Cinemas.Items){
    this.props.BaseStore.getNearCinemas(this.sortTheater(result.data.Cinemas.Items));
    }
  }


  componentDidMount(){
    this.getArea().then((location)=>this.props.BaseStore.initLocation(location));
    this.getTheaterInfo();
  }

  componentDidUpdate(nextProps){
    const { BaseStore }=this.props;
    var mapOptions = {
      center: new naver.maps.LatLng(nextProps.BaseStore.data.location.latitude, nextProps.BaseStore.data.location.longitude),
      zoom: 10
       };
    var map = new naver.maps.Map('map', mapOptions);
    var marker = new naver.maps.Marker({
      position: new naver.maps.LatLng(mapOptions.center),
      map: map
      });
  }

  sortTheater = (nearCinemas) => {
    const { BaseStore }=this.props;
    const {data} = BaseStore;
    const { location } = data;
    nearCinemas.forEach((cinema)=>{
        cinema.Distance=(this.getDistance(location.latitude,location.longitude,cinema.Latitude,cinema.Longitude,"K"));
       });
      
       return(nearCinemas.sort((a,b)=> a.Distance-b.Distance));
  }

  render(){
    const { BaseStore }=this.props;
    const {data} = BaseStore;
    const { theater, nearCinemas, location } = data;
    console.log(data);

    return (
      <div>
        <HeaderWrapper>
         <Card>
         <CardContent>
          <h4>영화관</h4>
          {theater.map((val)=><Button variant="outlined" color="primary" >{val.title}</Button>)}
          </CardContent>
         </Card>
        </HeaderWrapper>
        <ContentWrapper>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                현재 위치
              </Typography>
              <CardActions>
              <div id="map" style={{width:"100%",height: "400px"}}></div>
            </CardActions>
              <Typography component="p">
                <h2>현재 위치기반 가까운 영화관</h2>
                <h4>현재위치 { location.latitude},{location.longitude}</h4>
                {nearCinemas.map((cinema) => {
                  return( <div>
                   <h5>{cinema.CinemaNameKR}({cinema.CinemaNameUS})</h5>
                   <p>{cinema.Latitude},{cinema.Longitude}</p>
                 </div>)
                })}

              </Typography>
            </CardContent>
          </Card>
        </ContentWrapper>
        <DevTools />
      </div>
      
    )
  }
}

export default Theater;

