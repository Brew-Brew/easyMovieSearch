import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const TheaterWrapper = styled.div`
  width: 50%;
`;

const TheaterInfo = ({ nearCinemas, getMovieInfo }) =>{
    return(
        <TheaterWrapper>
            <Typography component="p">
            {nearCinemas.map((cinema) => {
            return( <Card  onClick={()=> getMovieInfo(cinema)}>
            <CardContent>
            <Button variant="outlined" color="primary" >{cinema.CinemaNameKR}({cinema.CinemaNameUS})</Button>
                <p>{cinema.Latitude},{cinema.Longitude}</p>
                <p>{cinema.Distance}KM</p>
            </CardContent>
            </Card>)
            })}
        </Typography>
      </TheaterWrapper>
    )
}

export default TheaterInfo;