import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import { device } from '../../util/device';

const MovieWrapper = styled.div`
  width: 50%;
  float: right;
`;

const CardWrapper = styled.div`
  margin-bottom: 10px;
  float: left;
  width: 30%;
  @media ${device.mobileToTablet} {
    width:100%;
  }
  & > div {
      height: 300px;
  }
  button{
      height: 100px;
  }
`;

const MovieInfo = ({ movies }) =>{
    return(
        
        <MovieWrapper>
            <Typography component="p">
            {movies.map((movie) => {
            return( 
            <CardWrapper>
                <Card>
                <CardContent>
                <Button variant="outlined" color="primary" >{movie.MovieNameKR}({movie.MovieNameUS})</Button>
                    <p>{movie.StartTime}~{movie.EndTime}</p>
                    <p>이용등급: {movie.ViewGradeNameKR}</p>
                    <p>남은좌석: {movie.BookingSeatCount}</p>
                </CardContent>
                </Card>
            </CardWrapper>
            )
            })}
        </Typography>
      </MovieWrapper>
     
    )
}

export default MovieInfo;