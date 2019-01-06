import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { device } from "../../util/device";

const Header = styled.h5`
  font-size: 15px;
`;
const TheaterWrapper = styled.div`
  width: 50%;
  float: left;
`;

const CardWrapper = styled.div`
  width: 200px;
  @media ${device.mobileToTablet} {
    width: 100px;
  }
  &:active {
    background-color: rgba(63, 81, 181, 0.5);
  }
  margin: auto;
  margin-bottom: 10px;
  border: solid 5px rgba(63, 81, 181, 0.5);
  button {
    font-size: 0.5em;
  }
`;

const TheaterInfo = ({ nearCinemas, getMovieInfo }) => {
  return (
    <TheaterWrapper>
      <Header>영화관 목록</Header>
      <Typography component="p">
        {nearCinemas.map(cinema => {
          return (
            <CardWrapper>
              <Card onClick={() => getMovieInfo(cinema)}>
                <CardContent>
                  <Button
                    style={{ width: "100%" }}
                    variant="outlined"
                    color="primary"
                  >
                    {cinema.CinemaNameKR}({cinema.CinemaNameUS})
                  </Button>
                  <p>
                    현재위치에서 {cinema.Distance.toFixed(2)}
                    KM 떨어져 있음
                  </p>
                </CardContent>
              </Card>
            </CardWrapper>
          );
        })}
      </Typography>
    </TheaterWrapper>
  );
};

export default TheaterInfo;
