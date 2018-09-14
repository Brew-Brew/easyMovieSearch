import React, { Component } from "react";
import {inject, observer} from "mobx-react";
import DevTools from 'mobx-react-devtools';
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
    this.state={ };
    this.getArea=this.getArea.bind(this);
    
  }
  getArea(){
    return new Promise(function (resolve, reject){ navigator.geolocation.getCurrentPosition( function (position) {
     resolve({latitude: position.coords.latitude, longitude: position.coords.longitude});
    })
  });
  }


  componentDidMount(){
    this.getArea().then((location)=>this.props.BaseStore.initLocation(location));
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
  render(){
    const { classes } = this.props;
    const { BaseStore }=this.props;
    return (
      <div>
        <HeaderWrapper>
         <Card>
         <CardContent>
          <h4>영화관</h4>
          {BaseStore.data.theater.map((val)=><Button variant="outlined" color="primary" >{val.title}</Button>)}
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
                현재 위치기반 가까운 영화관
                <Button size="small" color="primary">
                { BaseStore.data.location.latitude}
              </Button>
                <Button size="small" color="primary">
                  {BaseStore.data.location.longitude}
              </Button>
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

