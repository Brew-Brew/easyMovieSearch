import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const MovieWrapper = styled.div`
  width: calc(50% - 40px);
  float: right;
  margin: 10px 10px;
`;

const CardWrapper = styled.div`
  margin-bottom: 10px;
`;

const MovieInfo = ({ movies }) =>{
    return(
        <MovieWrapper>
            <Typography component="p">
            {movies.map((movie) => {
            return( <CardWrapper>
                <Card>
                <CardContent>
                <Button variant="outlined" color="primary" >{movie.MovieNameKR}({movie.MovieNameUS})</Button>
                    <p>{movie.StartTime}~{movie.EndTime}</p>
                </CardContent>
                </Card>
            </CardWrapper>)
            })}
        </Typography>
      </MovieWrapper>
    )
}

export default MovieInfo;