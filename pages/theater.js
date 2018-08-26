import Layout from "../components/MyLayout";
import React, { Component } from "react";
import {inject, observer} from "mobx-react";
import DevTools from 'mobx-react-devtools';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    maxWidth: 345,
  },
  contentCard:{
    maxWidth: 345,
    marginTop: 10,
  }
};

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
    this.getArea().then((location)=>this.props.BaseStore.initLocation(location));
  }
  render(){
    const { classes } = this.props;
    const { BaseStore }=this.props;
    return (
      <div>
         <Card className={classes.card}>
         <CardContent>
          <h4>영화관</h4>
          {BaseStore.data.theater.map((val)=><Button variant="outlined" color="primary" >{val.title}</Button>)}
          </CardContent>
         </Card>
       
        <Card className={classes.contentCard}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              현재 위치
            </Typography>
            <CardActions>
            <Button size="small" color="primary">
            { BaseStore.data.location.latitude}
            </Button>
            <Button size="small" color="primary">
            {BaseStore.data.location.longitude}
            </Button>
          </CardActions>
            <Typography component="p">
              현재 위치기반 가까운 영화관
            </Typography>
          </CardContent>
        </Card>
        <DevTools />
        <style jsx>{`
     #map{
       width: 400px
     }
    `}</style>
      </div>
      
    )
  }
}

export default withStyles(styles)(Theater);

