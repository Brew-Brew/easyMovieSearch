import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import DevTools from 'mobx-react-devtools';
import FormData from 'form-data';
import _ from 'lodash';
import moment from 'moment';
import TheaterInfo from './TheaterInfo';
import MovieInfo from './MovieInfo';

import lotteCinema from '../assets/lotte.jpg';
import cgv from '../assets/cgv.jpg';
import megabox from '../assets/megabox.png';

import { getTheater, getMovie } from '../../util/api';
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

const TheaterIcon = styled.img`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  border: solid 1px #384386;
  padding: 2px 10px;
  margin: 0px 10px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
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
    // array of object 중복제거
    const filteredCinema = (Object.values((result.data.Cinemas.Items).reduce((acc,cur)=>Object.assign(acc,{[cur.CinemaName]:cur}),{})))
    if(filteredCinema){
    this.props.BaseStore.getNearCinemas(this.sortTheater(filteredCinema));
    }
  }

  // test with dummy
  getMovieInfo = async(theater)=>{
    console.log(theater)
    const { BaseStore }=this.props;
    const {data} = BaseStore;
    const formData = new FormData();
    formData.append(
      'paramList', JSON.stringify(
        {
          "MethodName":"GetPlaySequence",
          "channelType":"MW",
          "osType":"",
          "osVersion":"",
          "playDate":"2018-10-08",
          "cinemaID":`1|1|${theater.CinemaID}`,
          "representationMovieCode":""
        }));
    const result = await getMovie(formData);
    const { data: { PlaySeqs: {Items} } } = result;
    this.props.BaseStore.getCinemasTime(this.sortTimeInfo(Items));
    }

  componentDidMount(){
    this.getArea().then((location)=>this.props.BaseStore.initLocation(location)).then(()=>this.getTheaterInfo());
  }

  componentDidUpdate(nextProps){
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

  sortTimeInfo = (movies) => {
    return _.orderBy(movies, ['StartTime'],['asc']).filter((movie)=> movie.StartTime > moment().format('hh:mm'))
  }

  render(){
    const { BaseStore }=this.props;
    const {data} = BaseStore;
    const { theater, nearCinemas, location, selectedCinemaInfo } = data;
    return (
      <div>
        <HeaderWrapper>
         <Card>
         <CardContent>
          <h4>Select Theater</h4>
          {theater.map((val)=><TheaterIcon src={(val.id === 'lotteCinema' && lotteCinema)
            || val.id==='cgv' && cgv  || val.id==='megabox' && megabox } />)}
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
            <h2>현재 위치기반 가까운 영화관</h2>
            <h4>현재위치 { location.latitude},{location.longitude}</h4>
            <TheaterInfo nearCinemas={nearCinemas} getMovieInfo={this.getMovieInfo}/>
            <MovieInfo movies={selectedCinemaInfo}/>
            </CardContent>
          </Card>
        </ContentWrapper>
        <DevTools />
      </div>
      
    )
  }
}

export default Theater;

