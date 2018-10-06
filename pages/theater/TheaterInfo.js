import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const TheaterWrapper = styled.div`
  width: calc(50% - 40px);
  float: left;
  margin: 10px 10px;
`;

const CardWrapper = styled.div`
  margin-bottom: 10px;
`;

const TheaterInfo = ({ nearCinemas, getMovieInfo }) =>{
    return(
        <TheaterWrapper>
            <Typography component="p">
            {nearCinemas.map((cinema) => {
            return( <CardWrapper>
            <Card  onClick={()=> getMovieInfo(cinema)}>
            <CardContent>
            <Button variant="outlined" color="primary" >{cinema.CinemaNameKR}({cinema.CinemaNameUS})</Button>
                <p>{cinema.Latitude},{cinema.Longitude}</p>
                <p>{cinema.Distance}KM</p>
            </CardContent>
            </Card>
            </CardWrapper>)
            })}
        </Typography>
      </TheaterWrapper>
    )
}

export default TheaterInfo;